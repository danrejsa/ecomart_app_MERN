import React, { Fragment, Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Report from "./reportAd";
import BuyCar from "./buyCar";
import BuyCarModal from "./buyCarModal";
import ViewDetails from "./viewDetails";
import { getItems, deleteItem } from "../actions/postAction";
import {
    Collapse,
    Navbar,
    Container,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    Button,
    Alert,
    Modal, ModalHeader, ModalBody, ModalFooter
  } from "reactstrap";

class History extends Component {
    state = {
        visible: true
      };

      onDismiss = () => {
        this.setState({ visible: false });
      }
    
componentWillMount() {
        this.props.getItems();
}

render() { 
        const { cars } = this.props.car;
        const { isAuthenticated, user } = this.props.auth;
        return (  <div className="containers">
              { isAuthenticated ? (cars.map(car => (
            <Fragment> {user._id === car.customerId ?(  <div className="car-container" style={{ height: "300px" }}>                  
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
                  <ViewDetails carId={car._id} carManu={car.manufacturer} />
                  
                  <Report carId={car._id} carManu={car.manufacturer} /> 
                                                        
                 <BuyCarModal ownerName={car.name} ownerEmail={car.email} carManu={car.manufacturer} carAdd={car.address}  carPhone={car.phone}  carPrice={car.price}/>
                   
                    
                </div>
              </div>):null}</Fragment>
              )            
               
               
             )): (<Container> <Alert style={{width:'100%'}} color="danger" isOpen={this.state.visible} >
             Please, login to view your transaction history!
           </Alert></Container>) }
             
            </div> );
    }
}
const mapStateToProps = state => ({
    car: state.car,
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { getItems, deleteItem }
  )(History);