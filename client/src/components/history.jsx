import React, { Fragment, Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Report from "./reportAd";
import BuyItem from "./buyItem";
import BuyItemModal from "./buyItemModal";
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
        const { items } = this.props.item;
        const { isAuthenticated, user } = this.props.auth;
        return (  <div className="containers">
              { isAuthenticated ? (items.map(item => (
            <Fragment> {user._id === item.customerId ?(  <div className="item-container" style={{ height: "300px" }}>                  
                <div
                  className="item-img-container"
                  style={{ width: "90%", height: "170px" }}
                >
                  <img
                    className="item-image"
                    style={{ width: "100%", height: "170px" }}
                    src={item.image_url}
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
                  <strong>Model</strong>: {item.manufacturer}
                </li>
                <li style={{ listStyleType: "none", marginLeft: "20px" }}>
                  <strong>Price</strong>: {item.price}
                </li>
                <div className="actions">
                  <ViewDetails itemId={item._id} itemManu={item.manufacturer} />
                  
                  <Report itemId={item._id} itemManu={item.manufacturer} /> 
                                                        
                 <BuyItemModal ownerName={item.name} ownerEmail={item.email} itemManu={item.manufacturer} itemAdd={item.address}  itemPhone={item.phone}  itemPrice={item.price}/>
                   
                    
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
    item: state.item,
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { getItems, deleteItem }
  )(History);