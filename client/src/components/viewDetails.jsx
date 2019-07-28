import React, { Component } from "react";
import { connect } from "react-redux";
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
import PropTypes from "prop-types";

class ViewDetails extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
    // error: PropTypes.object.isRequired
  };

  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <fragment>
        <NavLink
          href="#"
          color="dark"
          style={{ fontStyle: "", color: "blue" }}
          onClick={this.toggle}
        >
          View Detail
        </NavLink>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Car Details</ModalHeader>
          <ModalBody>
            <img
              style={{ width: "200px", height: "150px" }}
              src={this.props.carImage}
              alt={this.props.carManu}
            />
            <br />
            <Label>
              <strong>Car ID:</strong>
            </Label>{" "}
            {this.props.carId}
            <br />
            <Label>
              <strong>Model:</strong>
            </Label>{" "}
            {this.props.carManu}
            <br />
            <Label>
              <strong>Price:</strong>
            </Label>{" "}
            {this.props.carPrice}
            <br />
            <Label>
              <strong>Year:</strong>
            </Label>{" "}
            {this.props.carYear}
            <br />
            <Label>
              <strong>State:</strong>
            </Label>{" "}
            {this.props.carState}
            <br />
            <Label>
              <strong>Transmission:</strong>
            </Label>{" "}
            {this.props.carTransmission}
            <br />
            <Label>
              <strong>License:</strong>
            </Label>{" "}
            {this.props.carLicense}
            <br />
            <Label>
              <strong>Posted On:</strong>
            </Label>{" "}
            {this.props.carDate}
            <br />
            <Label>
              <strong>Description:</strong>
            </Label>{" "}
            {this.props.carDescription}
            <br />
          </ModalBody>
          <ModalFooter />
        </Modal>
      </fragment>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(ViewDetails);
