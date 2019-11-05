import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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

class BuyItemModal extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
    // error: PropTypes.object.isRequired
  };
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <div>
        {isAuthenticated ? (
          <Modal
            style={{ width: "100%" }}
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Transaction Details</ModalHeader>
            <ModalBody>
              {this.state.msg ? (
                <Alert color="danger">{this.state.msg}</Alert>
              ) : null}
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="name">
                    <strong>Item Details:</strong>
                  </Label>
                  <br />
                  <p>
                    Product:&nbsp;
                    <span style={{ color: "red" }}>{this.props.itemManu}</span>
                  </p>
                  <p>
                    Price:&nbsp;
                    <span style={{ color: "red" }}>{this.props.itemPrice}</span>
                  </p>
                  <p>
                    Current item Location:&nbsp;
                    <span style={{ color: "red" }}>{this.props.itemAdd}</span>
                  </p>
                </FormGroup>
                <FormGroup>
                  <Label for="name">
                    <strong>Posted By:</strong>
                  </Label>
                  <br />
                  <p>
                    Name:&nbsp;
                    <span style={{ color: "red" }}>{this.props.ownerName}</span>
                  </p>
                  <p>
                    Email:&nbsp;
                    <span style={{ color: "red" }}>
                      {this.props.ownerEmail}
                    </span>
                  </p>
                  <p>
                    Phone:&nbsp;
                    <span style={{ color: "red" }}>{this.props.ownerPhone}</span>
                  </p>
                 

                  <hr />
                  <h6>Important Information!</h6>
                  <p>
                    i.{" "}
                    <span>
                      {" "}
                      &nbsp;Do not pay in advance even for the delivery!
                    </span>
                  </p>
                  <p>
                    {" "}
                    ii.
                    <span> &nbsp; Try to meet at a safe, public location</span>
                  </p>
                  <p>
                    iii.{" "}
                    <span> &nbsp; Check item very well BEFORE you buy it</span>
                  </p>
                  <p>
                    iv. <span> &nbsp; Pay ONLY after collecting the item</span>
                  </p>
                  <hr />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter />
          </Modal>
        ) : (
          <Modal
            isOpen={this.state.modal}
            togglePost={this.togglePost}
            className={this.props.className}
          >
            <ModalHeader togglePost={this.togglePost}>
              DLinks
            </ModalHeader>
            <ModalBody>Please login to perform this transaction</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Ok
              </Button>
            </ModalFooter>
          </Modal>
        )}
        <Button onClick={this.toggle} outline color="info" size="sm">
          Buy Now
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(BuyItemModal);
