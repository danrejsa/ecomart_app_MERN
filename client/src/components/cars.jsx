import React, { Component, useState, useEffect } from "react";
import logo from "../logo.svg";
import { getItems, deleteItem } from "../actions/postAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Report from "./reportAd";
import Pagination from "./pagination";
import BuyCar from "./buyCar";
import BuyCarModal from "./buyCarModal";
import ViewDetails from "./viewDetails";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  NavLink,
  Alert
} from "reactstrap";

class Cars extends Component {
  componentWillMount() {
    this.props.getItems();
  }
  state = {
    currentPage: 1,
    carsPerPage: 9,
    setCurrentPage: null
  };

  paginate = pageNumber => {
    this.setState({
      currentPage: pageNumber
    });
  };

  render() {
    const { cars } = this.props.car;
    const { isAuthenticated, user } = this.props.auth;
    const indexOfLastPost = this.state.currentPage * this.state.carsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.carsPerPage;
    const currentCars = cars.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <Router>
        <Container style={{ marginBottom: "5rem" }}>
          <form class="form-inline my-2 my-lg-0">
            <input
              style={{ width: "90%" }}
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>

          <div className="containers">
            {currentCars.map(car => (
              <div className="car-container" style={{ height: "300px" }}>
                <div
                  className="car-img-container"
                  style={{ width: "90%", height: "170px" }}
                >
                  <img
                    className="car-image"
                    style={{ width: "100%", height: "170px" }}
                    src={car.image_url}
                    alt="missing image"
                  />
                </div>
                <li
                  style={{
                    listStyleType: "none",
                    marginLeft: "20px",
                    marginTop: "0.5rem"
                  }}
                >
                  <strong>Model</strong>: {car.manufacturer}
                </li>
                <li style={{ listStyleType: "none", marginLeft: "20px" }}>
                  <strong>Price</strong>: {car.price}
                </li>
                <div className="actions">
                  <ViewDetails
                    carId={car._id}
                    carManu={car.manufacturer}
                    carPrice={car.price}
                    carState={car.state}
                    carTransmission={car.transmission}
                    carLicense={car.license}
                    carYear={car.year}
                    carDescription={car.description}
                    carImage={car.image_url}
                    carDate={car.created_on}
                  />

                  <Report carId={car._id} carManu={car.manufacturer} />

                  <BuyCarModal
                    ownerName={car.name}
                    ownerEmail={car.email}
                    carManu={car.manufacturer}
                    carAdd={car.address}
                    carPhone={car.phone}
                    carPrice={car.price}
                  />
                </div>
              </div>
            ))}
          </div>
          <Pagination
            carsPerPage={this.state.carsPerPage}
            totalCars={cars.length}
            paginate={this.paginate}
          />
        </Container>
        <Route path="/buyCar/" component={BuyCar} />
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  car: state.car,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(Cars);
