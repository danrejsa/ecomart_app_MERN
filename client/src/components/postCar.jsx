import React, {Fragment, Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/postAction";
import { AUTH_ERROR } from "../actions/types";
import PropTypes from "prop-types";
import Home from "./home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Alert,
  Input,
  Container,
  Progress
} from "reactstrap";

class PostCar extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  state = {
    customerId:"",
    name: "",
    email: "",
    car_location: "",
    address: "",
    phone: "",
    manufacturer: "",
    body_type: "",
    year: "",
    price: "",
    transmission: "",
    license: "",
    state: "",
    status: "",
    description: "",
    file: null,
    imagePreviewUrl: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  _handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  onSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("customerId", this.state.customerId);
    data.append("name", this.state.name);
    data.append("email", this.state.email);
    data.append("car_location", this.state.car_location);
    data.append("address", this.state.address);
    data.append("phone", this.state.phone);
    data.append("manufacturer", this.state.manufacturer);
    data.append("body_type", this.state.body_type);
    data.append("year", this.state.year);
    data.append("price", this.state.price);
    data.append("transmission", this.state.transmission);
    data.append("license", this.state.license);
    data.append("state", this.state.state);
    data.append("status", this.state.status);
    data.append("description", this.state.description);
    data.append("file", this.state.file);
    this.props.addItem(data);
  };

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <img
          style={{ width: "150px", height: "130px" }}
          src={imagePreviewUrl}
        />
      );
    }

    const {
      customerId,
      name,
      email,
      car_location,
      address,
      phone,
      manufacturer,
      body_type,
      year,
      price,
      transmission,
      license,
      state,
      status,
      description,
      image_url
    } = this.state;
    const { isAuthenticated, user } = this.props.auth;
    return (
      
      <Container style={{ marginTop: "3rem" }}>
        
        {isAuthenticated? 
        <Fragment>       
        <h3 className='post-title'>Post Car </h3>
        <Form
          onSubmit={this.onSubmit}
          ref="myForm"
          style={{ margin: "auto", width: "70%" }}
        >
          <FormGroup>
            <Label for="customerId">Customer ID (Check your profile for this Id):</Label>
            <Input
              onChange={this.onChange}
              type="text"
              name="customerId"
              id="customerId"
              value={customerId}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Full Names:</Label>
            <Input
              onChange={this.onChange}
              type="text"
              name="name"
              id="name"
              value={name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              onChange={this.onChange}
              type="text"
              name="email"
              id="email"
              value={email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input
              onChange={this.onChange}
              type="number"
              name="phone"
              id="phone"
              value={phone}
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              onChange={this.onChange}
              type="text"
              name="address"
              id="address"
              value={address}
            />
          </FormGroup>
          <FormGroup>
            <Label for="car_location">Current Car Location</Label>
            <Input
              onChange={this.onChange}
              type="text"
              name="car_location"
              id="car_location"
              value={car_location}
            />
          </FormGroup>

          <FormGroup>
            <Label for="manufacture">Manufacturer</Label>
            <Input
              onChange={this.onChange}
              type="select"
              name="manufacturer"
              id="manufacturer"
              value={manufacturer}
            >
              <option selected> --select-- </option>
              <option>Honda</option>
              <option>Toyota</option>
              <option>Peugeot</option>
              <option>Mercedes</option>
              <option>Nissan</option>
              <option>Lexus</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="body_type">Body Type</Label>
            <Input
              onChange={this.onChange}
              type="select"
              name="body_type"
              id="body_type"
              value={body_type}
            >
              <option selected>--select--</option>
              <option>SUV</option>
              <option>Saloon</option>
              <option>Car</option>
              <option>Truck</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="year">Year</Label>
            <Input
              onChange={this.onChange}
              type="number"
              name="year"
              id="year"
              value={year}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input
              onChange={this.onChange}
              type="text"
              name="price"
              id="price"
              placeholder="$ 10,000"
              value={price}
            />
          </FormGroup>

          <FormGroup>
            <Label for="transmission">Transmission</Label>
            <Input
              onChange={this.onChange}
              type="select"
              name="transmission"
              id="transmission"
              value={transmission}
            >
              <option selected>--select--</option>
              <option>Automatic</option>
              <option>Manual</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="license">License</Label>
            <Input
              onChange={this.onChange}
              type="text"
              name="license"
              id="license"
              value={license}
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              onChange={this.onChange}
              type="select"
              name="state"
              id="state"
              value={state}
            >
              <option selected>--select--</option>
              <option>New</option>
              <option>Fairly Used</option>
              <option>Old</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="status">Status</Label>
            <Input
              onChange={this.onChange}
              type="select"
              name="status"
              id="status"
              value={status}
            >
              <option selected>--select--</option>
              <option>Sold</option>
              <option>Available</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              onChange={this.onChange}
              type="textarea"
              name="description"
              id="description"
              placeholder="Please provide a detailed description. You can mention as many details as possible. It will make your Carore attractive"
              value={description}
            />
          </FormGroup>

          <FormGroup>
            <input
              type="file"
              ref="file"
              name="file"
              onChange={this._handleImageChange}
            />
          </FormGroup>
          {$imagePreview}

          <Button color='info' style={{ marginBottom: "6rem", marginTop: "2rem", float:'right' }}>
            Post Ad
          </Button>
        </Form></Fragment>
        :<Alert style={{width:'100%'}} color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
        Please, you need to login to post an Ads!
      </Alert>}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  car: state.car,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addItem }
)(PostCar);
