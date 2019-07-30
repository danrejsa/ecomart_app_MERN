const Cars = require("../models/car");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
const auth = require("../middleware/auth");
chai.use(chaiHttp);

/*
 * Test the /GET route
 */

describe("Car Route", () => {
  describe("GET single car", () => {
    it("it should GET a single car ", done => {
      let car = {
        id: "5d3ca2dfd6832a1f540cbc99",
        customerId: "5d31e1108de59d22903c35d1",
        name: "Rejoice Shekinat Ado",
        email: "danrejsa001@gmail.com",
        car_location: "N0.8 Numa Street Shagari Phase 4",
        address: "No.12 Maitama Cresent, Abuja",
        phone: 2359983664,
        manufacturer: "Toyota",
        status: "Available",
        state: "Used",
        price: "$ 4500",
        year: "2015",
        transmission: "Automatic",
        license: "RET-OF7-GH",
        description:
          "This car is in perfect condition. It was serviced as at when it should. ",
        image_url:
          "https://res.cloudinary.com/danrejsa/image/upload/v1564254945/Car_Store/2019-07-27T19:15:40.748Z.jpg",
        created_on: "2019-07-27T19:15:43.154Z"
      };
      chai
        .request(server)
        .get("/api/cars/" + car.id)
        .send(car)
        .end((err, res) => {
          res.should.have
            .status(200)
            .which.is.an("object")
            .and.has.property("status")
            .eql(res.statusCode);

          done();
        });
    });
  });

  describe("/GET cars", () => {
    it("it should GET all the cars", done => {
      chai
        .request(server)
        .get("/api/cars")
        .end((err, res) => {
          res.should.have
            .status(200)
            .which.is.an("object")
            .and.has.property("status")
            .eql(res.statusCode);
          done();
        });
    });
  });

  describe("PATCH Car", () => {
    it("it should UPDATE price and status of a car given the id", done => {
      let car = {
        id: "5d3ab048e9c4e81d74aea227",
        name: "Didi",
        email: "odeboreime92@gmail.com",
        car_location: "Lagos Lagoon Estate",
        address: "Shagari Edun ",
        phone: 56348859930,
        manufacturer: "Toyota",
        status: "Available",
        state: "Old",
        price: "$ 7100",
        year: "2016",
        transmission: "Manual",
        license: "ASD-45FT-NG",
        description: "This car is in good state",
        image_url:
          "https://res.cloudinary.com/danrejsa/image/upload/v1564127306/Car_Store/2019-07-26T07:48:22.531Z.jpg"
      };
      chai
        .request(server)
        .patch("/api/cars/" + car.id)
        .send({
          status: "Sold",
          price: "$ 11,000"
        })
        .end((err, res) => {
          res.should.have
            .status(200)
            .which.is.an("object")
            .and.has.property("status")
            .eql(res.statusCode);
          done();
        });
    });
  });


  describe("DELETE Car", () => {
    it("it should DELETE a car with the given id", () => {
      let car = {
        id: "5d3d7573d6832a1f540cbc9a",
        customerId: "5d31e1108de59d22903c35d1",
        name: "Rejoice Shekinat Ado",
        email: "danrejsa001@gmail.com",
        car_location: "Maitaima, Abuja",
        address: "No.8 Maitaima Cresent, FCT Abuja",
        phone: 234567890,
        manufacturer: "Honda",
        status: "Available",
        state: "Used",
        price: "$ 3200",
        year: "2014",
        transmission: "Automatic",
        license: "GYT-78H-GH",
        description: "This car is American used and the condition is okay",
        image_url:
          "https://res.cloudinary.com/danrejsa/image/upload/v1564308854/Car_Store/2019-07-28T10:14:09.552Z.jpg"
      };

      chai
        .request(server)
        .delete("/api/cars/" + car.id)
        .end((err, res) => {
          res.should.have
            .status(200)
            .which.is.an("object")
            .and.has.property("_id")
            .and.has.property("msg")
            .eql("car deleted succesfully")
            .and.has.property("status")
            .eql(res.statusCode);
       
        });
    });
  });
});
