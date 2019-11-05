import React, { Component, useState, useEffect } from "react";
import logo from "../logo.svg";
import { getItems, deleteItem } from "../actions/postAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Report from "./reportAd";
import Pagination from "./pagination";
import BuyItem from "./buyItem";
import BuyItemModal from "./buyItemModal";
import ViewDetails from "./viewDetails";
import Footer from "./footer";
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

class Items extends Component {
  componentWillMount() {
    this.props.getItems();
  }
  state = {
    currentPage: 1,
    itemsPerPage: 9,
    setCurrentPage: null
  };

  paginate = pageNumber => {
    this.setState({
      currentPage: pageNumber
    });
  };

  render() {
    const { items } = this.props.item;
    const { isAuthenticated, user } = this.props.auth;
    const indexOfLastPost = this.state.currentPage * this.state.itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.itemsPerPage;
    const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

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
            {currentItems.map(item => (
              <div className="item-container" style={{ height: "300px" }}>
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
                  <strong>Product</strong>: {item.manufacturer}
                </li>
                <li style={{ listStyleType: "none", marginLeft: "20px" }}>
                  <strong>Price</strong>:N {item.price}
                </li>
                <div className="actions">
                  <ViewDetails
                    itemId={item._id}
                    itemManu={item.manufacturer}
                    itemPrice={item.price}
                    itemState={item.state}
                    itemTransmission={item.transmission}
                    itemLicense={item.license}
                    itemYear={item.year}
                    itemDescription={item.description}
                    itemImage={item.image_url}
                    itemDate={item.created_on}
                  />

                  <Report itemId={item._id} itemManu={item.manufacturer} />

                  <BuyItemModal
                    ownerName={item.name}
                    ownerEmail={item.email}
                    itemManu={item.manufacturer}
                    itemAdd={item.address}
                    ownerPhone={item.phone}
                    itemPrice={item.price}
                  />
                </div>
              </div>
            ))}
          </div>
          <Pagination
            itemsPerPage={this.state.itemsPerPage}
            totalItems={items.length}
            paginate={this.paginate}
          />
        </Container>
        <Footer/>  
        <Route path="/buyItem/" component={BuyItem} />
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  item: state.item,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(Items);
