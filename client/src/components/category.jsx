import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostFarmProduct from "./postFarmProduct";
import PostHomeAppliance from "./postHomeAppliance";
import PostOthers from "./postOthers";
import PostCar from "./postCar";
import PostBooks from "./postBooks";
import { connect } from "react-redux";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  
    NavLink,
  
    NavItem,

    Container,
   
  } from "reactstrap";


class Category extends Component {
    state = {  }
    render() { 
        const { isAuthenticated, user } = this.props.auth;
        return ( 
            <Router>
                <Container >
            <div style={{width: '80%', marginLeft:'auto', marginRight:'auto',marginTop:'4rem', height:'180px', background:'whiteSmoke'}}>
            <div style={{color:'gray',textAlign: 'justify' , width:'90%',marginLeft:'2rem'}}><h2>Category</h2>
            <p> DLinks is an online market place potential sellers can advertise their products. 
              Different categories of products can be posted ranging from domestic appliances,accessories to farm produce and lots more. Please select 
              from list of categories below of post an ad.    </p>
          <div style={{width:'180px', color:'#ffff',border:'1px solid #fff', listStyleType:'none'}}>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret style={{color:'#333'}}>

            Choose Category
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavItem>
                <NavLink color="dark" href="#" >
                  <Link style={{ color: "gray" }} class="link" to="/postCar">
                  Automobiles
                  </Link>
                  </NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem right>
                <NavItem>
                  <NavLink color="dark" href="#" >
                    <Link style={{ color: "gray" }} class="link" to="/postHomeAppliance">
                      Home Appliances
                    </Link>
                  </NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem divider />
              
              <DropdownItem right>
                <NavItem>
                <NavLink color="dark" href="#" >
                  <Link style={{ color: "gray" }} class="link" to="/postFarmProduct">
                   Farm Products
                  </Link>
                  </NavLink>
                </NavItem>
                </DropdownItem>
                <DropdownItem divider />

              <DropdownItem right>
                <NavItem>
                <NavLink color="dark" href="#" >
                  <Link style={{ color: "gray" }} class="link" to="/postBooks">
                 Books
                  </Link>
                  </NavLink>
                </NavItem>
             
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem right>
                <NavItem>
                <NavLink color="dark" href="#" >
                  <Link style={{ color: "gray" }} class="link" to="/postOthers">
                  Others
                  </Link>
                  </NavLink>
                </NavItem>
              </DropdownItem>
            </DropdownMenu>
            
          </UncontrolledDropdown>
          </div>
            </div>
            </div>
           
            </Container>
            <Route path="/postCar/" component={PostCar} />
            <Route path="/postHomeAppliance/" component={PostHomeAppliance} />
            <Route path="/postFarmProduct/" component={PostFarmProduct} />
            <Route path="/postBooks/" component={PostBooks} />
            <Route path="/postOthers/" component={PostOthers} />
            </Router> );
    }
}
 
const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    null
  )(Category);
