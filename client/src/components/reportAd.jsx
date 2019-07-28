import React, { Component , Fragment} from "react";
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


class Report extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
   // error: PropTypes.object.isRequired   
  };

  
  state = {
    modal: false,
    name: "",
    email: "",
    issue: "",
    msg: null
  };

  toggle = () => {   
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, issue } = this.state;
    const report = {
      name,
      email,
      issue
    };

    //this.props.register(report);
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <fragment>
        <NavLink
          href="#"
          color="dark"
          style={{ fontStyle: "italic", color: "red" }}
          onClick={this.toggle}
        >
          Report Ads! 
        </NavLink>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Report this Ads </ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
             
              <Label for="name"><strong>Car ID:</strong></Label> {this.props.carId}<br/>
              <Label for="name"><strong>Model:</strong></Label> {this.props.carManu}<br/>
                <Label for="name">Name</Label>
                <Input
                
                  type="text"
                  name="name"
                  id="item"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
            
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="issue">Report</Label>
                <Input
                
                  type="textarea"
                  name="issue"
                  id="issue"
                  onChange={this.onChange}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>            
            {isAuthenticated? ( <Button color="danger" onClick={this.onSubmit}>
              Send
            </Button>):
              <Fragment>
            <span style={{color:'red', fontStyle:'italic'}}>** You must login before you can report this ad</span>
           <Button color="danger"  disabled onClick={this.onSubmit}>
           Send
            </Button></Fragment>}
           
            
          </ModalFooter>
        </Modal>
      </fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
   null
)(Report);
