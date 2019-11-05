import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { addItem } from "../actions/postAction";
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

class PostHomeAppliance extends Component {
    state = { customerId:"",
    name: "",
    email: "",
    item_location: "",
    address: "",
    phone: "", 
    manufacturer: "",   
    year: "",
    color:'',
    price: "",   
    state: "",
    status: "",
    license:'',
    description: "",
    file: null,
    imagePreviewUrl: "" }



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
      data.append("item_location", this.state.item_location);
      data.append("address", this.state.address);
      data.append("phone", this.state.phone);
      data.append("manufacturer", this.state.manufacturer);     
      data.append("year", this.state.year);
      data.append("price", this.state.price);
      data.append("color", this.state.color);
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
    
        const { isAuthenticated, user } = this.props.auth;
        const {
            customerId,
            name,
            email,
            item_location,
            address,
            phone,          
            color,
            manufacturer,            
            year,
            price,           
            state,
            status,
            license,
            description
           
          } = this.state;
        return ( <Container style={{ marginTop: "3rem" }}>
        
        {isAuthenticated? 
        <Fragment>       
        <h3 className='post-title'>Post Home Appliances</h3>
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
            <Label for="item_location"> Item Current Location</Label>
            <Input
              onChange={this.onChange}
              type="text"
              name="item_location"
              id="item_location"
              value={item_location}
            />
          </FormGroup>

          <FormGroup>
            <Label for="manufacture">Manufacturer/Model</Label>
            <Input
              onChange={this.onChange}
              type="text"
              name="manufacturer"
              id="manufacturer"
              value={manufacturer}
              placeholder='(e.g Samsung Galaxy s12, LG LED TV, Philips 345 Blender, TEQ 514 Generator, OX Limo Standing Fan)'
            >          
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
              placeholder="10,000"
              value={price}
            />
          </FormGroup>
         
          <FormGroup>
            <Label for="license">Product ID</Label>
            <Input
              onChange={this.onChange}
              type="text"
              name="license"
              id="license"
              value={license}
            />
          </FormGroup>
          <FormGroup>
            <Label for="color">Colour</Label>
            <Input
              onChange={this.onChange}
              type="text"
              name="color"
              id="color"
              value={color}
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
              placeholder="Please provide a detailed description. You can mention as many details as possible. It will make your product more attractive"
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
      </Container> );
    }
}
 
const mapStateToProps = state => ({
    car: state.car,
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { addItem }
  )( PostHomeAppliance); 