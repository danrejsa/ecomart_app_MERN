import React, { Component } from "react";
import { logout } from "../../actions/authAction";
import { connect } from "react-redux";
import { NavLink } from "reactstrap";
import PropTypes from "prop-types";
import Home from "../home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LogOut extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };
  state = {};
  render() {
    return (
      <fragment>
        <NavLink onClick={this.props.logout}>Logout</NavLink>
      </fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(LogOut);
