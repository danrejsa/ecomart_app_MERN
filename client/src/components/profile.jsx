import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Label,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavLink,
    NavItem,
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter
  } from "reactstrap";


class Profile extends Component {
    state = {
        modal: false,
       
      };

      toggle = () => {   
        this.setState({
          modal: !this.state.modal
        });
      };

    render() { 
        const { isAuthenticated, user } = this.props.auth;
        return (  <fragment>
            <NavLink
              href="#"                         
              onClick={this.toggle}
            >
              My Profile
            </NavLink>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>My Profile</ModalHeader>
            <ModalBody>
            <Label ><strong>Customer ID:</strong>&nbsp;&nbsp;{user._id}</Label> <br/>
              <Label ><strong>Name:</strong>&nbsp;&nbsp;{user.name}</Label> <br/>
              <Label ><strong>Email:</strong>&nbsp;&nbsp;{user.email}</Label> <br/>
            </ModalBody>
            <ModalFooter>
             
              <Button color="secondary" onClick={this.toggle}>Ok</Button>
            </ModalFooter>
          </Modal>
          </fragment>);
    }
}
const mapStateToProps = state => ({
    auth: state.auth
  }); 
  export default connect(
    mapStateToProps,
    null
  )(Profile);