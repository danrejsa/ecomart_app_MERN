import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import logo from "../logo.svg";
import Home from "./home";
import BuyItem from "./buyItem";
import Dashboard from "./admin/dashboard";
import PostAds from "./postCar";
import Profile from "./profile";
import History from "./history";
import Login from "./auth/login";
import Register from "./auth/register";
import LogOut from "./auth/logout";
import Category from "./category";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class NavBar extends Component {
  state = {
    isOpen: false,
    modal: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  togglePost = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <Fragment>
        <NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              {user ? (
                <Fragment>
                  <i class="material-icons">account_circle</i>
                  <strong>{user.name}</strong>{" "}
                </Fragment>
              ) : (
                ""
              )}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavItem>
                  <Link style={{ color: "#333" }} class="link" to="/history">
                    <Profile />
                  </Link>
                </NavItem>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavItem>
                  <NavLink color="dark" href="#" onClick={this.toggle}>
                    <Link style={{ color: "gray" }} class="link" to="/history">
                      My Uploads
                    </Link>
                  </NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavItem>
                  <Link style={{ color: "#333" }} class="link" to="/">
                    <LogOut />
                  </Link>
                </NavItem>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </NavItem>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <NavItem>
          <Button
            outline
            color="info"
            size="sm"
            style={{ margin: "5px", padding: "1px", width: "100px" }}
          >
            {" "}
            <Login />
          </Button>
        </NavItem>
        <NavItem>
          <Button
            outline
            color="info"
            size="sm"
            style={{ margin: "5px", padding: "1px", width: "100px" }}
          >
            {" "}
            <Register />
          </Button>
        </NavItem>
      </Fragment>
    );
    return (
      <Router>
        <div>
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
              <Button color="primary" onClick={this.togglePost}>
                Ok
              </Button>
            </ModalFooter>
          </Modal>
          <Navbar color="light" light expand="md">
            <NavbarBrand>
              <Link class="link" to="/">
                <h3 style={{ color: "gray" }}>      DLinks</h3>{" "}
              </Link>
            </NavbarBrand>
            <img src={logo} className="App-logo" alt="logo" />
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {isAuthenticated && user.name === "Rejoice" ? (
                  <Fragment>
                    {" "}
                    <NavItem>
                      <Link to="/dashboard">
                        <Button
                        className='dashboard-btn'
                          outline
                          color="info"
                          size="sm"
                        
                        >
                          Dashboard
                        </Button>
                      </Link>
                    </NavItem>
                  </Fragment>
                ) : null}

                {isAuthenticated ? (
                  <NavItem className='post-button'>                    
                    <Link  className='post-btn-link' to="/category/">
                      <Button
                        outline
                        color="secondary"
                        className='post-btn'
                      >
                       <span class='post-btn-text'> Post Ads{" "}</span>
                        <span  class="material-icons">add</span>
                      </Button>
                    </Link>
                  </NavItem>
                ) : (
                  <NavItem className='post-button'>
                    <Link to="#" className='post-btn-link'>
                      <Button
                      className='post-btn'
                        onClick={this.togglePost}
                        outline
                        color="secondary"                       
                      >
                      <span class='post-btn-text'>Post Ads{" "}</span> 
                        <span class="material-icons">add</span>
                      </Button>
                    </Link>
                  </NavItem>
                )}
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Navbar>
     
          <Route path="/" exact component={Home} />         
          <Route path="/history/" component={History} />
          <Route path="/category/" component={Category} />       
         
          <Route path="/postAds/" component={PostAds} />
          <Route path="/buyItem/" component={BuyItem} />
          <Route path="/dashboard/" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(NavBar);
