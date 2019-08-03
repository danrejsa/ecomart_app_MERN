const express = require("express");
const router = express.Router();
const Car = require("../../models/car");
const auth = require("../../middleware/auth");
const config = require("config");
const apiSecret = config.get("apiSecret");
const apiKey = config.get("apikey");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

//@ GET ALL CARS route
router.get("/", (req, res) => {
  Car.find()
    .sort({ created_on: -1 })
    .then(cars => {
      res.status(200).json({ status: res.statusCode, cars });
    })
    .catch(err => {
      res.status(404).json({ error: err });
    });
});

//GET A CAR route
router.get("/:id", (req, res) => {
  Car.findById(req.params.id)
    .exec()
    .then(car => {
      if (car) return res.status(200).json({ status: res.statusCode, car });
      res.status(404).json({ msg: "car within the given id not found" });
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

//@POST A CAR route
router.post("/", auth,(req, res) => {
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
      { public_id: `Car_Store/${uniqueFilename}`, tags: `cars` }, // directory and tags are optional
      function(err, image) {
        if (err) return res.send(err);
        console.log("file uploaded to Cloudinary");
        console.log(image.secure_url);
        const image_url = image.secure_url;

        const customerId = req.body.customerId;
        const name = req.body.name;
        const email = req.body.email;
        const car_location = req.body.car_location;
        const address = req.body.address;
        const phone = req.body.phone;
        const manufacturer = req.body.manufacturer;
        const status = req.body.status;
        const state = req.body.state;
        const price = req.body.price;
        const year = req.body.year;
        const transmission = req.body.transmission;
        const registered = req.body.registered;
        const license = req.body.license;
        const description = req.body.description;
        const model = req.body.model;

        const car = new Car({
          customerId,
          name,
          email,
          car_location,
          address,
          phone,
          manufacturer,
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
        car
          .save()
          .then(car => {
            console.log("car posted successfully");

            res.status(201).json({
              status: res.statusCode,
              cars: car,
              msg: "car posted sucessfully"
            });
          })
          .catch(err => {
            res.status(500).json({ status: res.statusCode, error: err });
          });
      }
    );
  });
});

//@DELETE A CAR route
router.delete("/:id", (req, res) => {
  Car.findById(req.params.id)
    .then(car => car.remove())
    .then(() =>
      res
        .status(200)
        .json({ status: res.statusCode, msg: "car deleted succesfully" })
    )
    .catch(err => res.status(500).json({ status: res.statusCode, error: err }));
});

//@PATCH A CAR route
router.patch("/:id", (req, res) => {
  Car.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: req.body.status,
        price: req.body.price
      }
    }
  )
    .exec()
    .then(car => {
      res
        .status(200)
        .json({ status: res.statusCode, car, msg: "car updated successfully" });
    })
    .catch(err => {
      res.status(500).json({ status: res.statusCode, error: err });
    });
});

module.exports = router;
