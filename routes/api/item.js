const express = require("express");
const router = express.Router();
const Item = require("../../models/item");
const auth = require("../../middleware/auth");
const config = require("config");
const apiSecret = config.get("apiSecret");
const apiKey = config.get("apikey");
const cloudinary = require("cloudinary").v2;
const multer = require("multer")

//@ GET ALL Items route
router.get("/", (req, res) => {
  Item.find()
    .sort({ created_on: -1 })
    .then(items => {
      res.status(200).json({ status: res.statusCode, items });
    })
    .catch(err => {
      res.status(404).json({ error: err });
    });
});

//GET An Item route
router.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .exec()
    .then(item => {
      if (item) return res.status(200).json({ status: res.statusCode, item });
      res.status(404).json({ msg: "item within the given id not found" });
    })
    .catch(err => {
      res.status(500).json({ status: res.statusCode, error: err });
    });
});

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
var upload = multer({ storage: storage }).single("file");

//@POST A Item route
router.post("/", auth, (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.end("Error uploading file.");
    }
    cloudinary.config({
      cloud_name: "danrejsa",
      api_key: apiKey,
      api_secret: apiSecret
    });

    const path = req.file.path;
    const uniqueFilename = new Date().toISOString();
    cloudinary.uploader.upload(
      path,
      { public_id: `Item_Store/${uniqueFilename}`, tags: `items` }, // directory and tags are optional
      function(err, image) {
        if (err) return res.send(err);
        console.log("file uploaded to Cloudinary");
        console.log(image.secure_url);
        const image_url = image.secure_url;

        const customerId = req.body.customerId;
        const name = req.body.name;
        const email = req.body.email;
        const item_location = req.body.item_location;
        const address = req.body.address;
        const color = req.body.color;
        const phone = req.body.phone;
        const manufacturer = req.body.manufacturer;
        const status = req.body.status;
        const state = req.body.state;
        const price = req.body.price;
        const quantity = req.body.quantity;
        const year = req.body.year;
        const transmission = req.body.transmission;
        const registered = req.body.registered;
        const license = req.body.license;
        const description = req.body.description;
        const model = req.body.model;
        const author = req.body.author;

        const item = new Item({
          customerId,
          name,
          email,
          item_location,
          address,
          color,
          phone,
          quantity,
          manufacturer,
          author,
          status,
          state,
          price,
          year,
          transmission,
          registered,
          license,
          description,
          model,
          image_url
        });
        item
          .save()
          .then(item => {
            console.log("item posted successfully");

            res.status(201).json({
              status: res.statusCode,
              items: item,
              msg: "item posted sucessfully"
            });
          })
          .catch(err => {
            res.status(500).json({ status: res.statusCode, error: err });
          });
      }
    );
  });
});

//@DELETE A Item route
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove())
    .then(() =>
      res
        .status(200)
        .json({ status: res.statusCode, msg: "item deleted succesfully" })
    )
    .catch(err => res.status(500).json({ status: res.statusCode, error: err }));
});

//@PATCH A Item route
router.patch("/:id", (req, res) => {
  Item.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: req.body.status,
        price: req.body.price
      }
    }
  )
    .exec()
    .then(item => {
      res
        .status(200)
        .json({ status: res.statusCode, item, msg: "item updated successfully" });
    })
    .catch(err => {
      res.status(500).json({ status: res.statusCode, error: err });
    });
});

module.exports = router;
