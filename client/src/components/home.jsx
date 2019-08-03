import React, { Component, useState, useEffect } from "react";
import logo from "../logo.svg";
import { getItems, deleteItem } from "../actions/postAction";
import { connect } from "react-redux";
import instagram from "../assets/instagram-icon.svg";
import facebook from "../assets/facebook-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import Cars from "./cars";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Container,
  Modal,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

class Home extends Component {
  state = { activeIndex: 0 };
  componentWillMount() {
    this.props.getItems();
   
  }

  
  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.car.cars.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ?this.props.car.cars.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }


 

  render() {
    const { cars } = this.props.car;
    const { activeIndex } = this.state;

    const slides = cars.map((car) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={car._id}
        >
          <img style={{width:'100%', height:'500px'}} src={car.image_url} alt={car.manufacturer} />         
        </CarouselItem>
      );
    });

  return (
      <Router>
        <div>
          <div class="slides">
            <div class="slider" id="slide-left" />
            <div class="sliderC" id="slide-center">
            <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
      
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
            </div>
            <div class="slider" id="slide-right">
              {" "}
            </div>
          </div>
          <Cars />
        </div>
        <footer>
          <div className='footer-div'>
            <h6><strong>Company</strong></h6>
            <p><a className='footer-text' href='#'>About us</a></p>
            <p><a className='footer-text' href='#'>Contact us</a></p>
            <p><a className='footer-text' href='#'>Services</a></p>
            <p><a className='footer-text' href='#'>FAQ</a></p>
          </div>
          <div className='footer-div'>
          <h6><strong>Products</strong></h6>           
            <p><a className='footer-text' href='#'>Features</a></p>
            <p><a className='footer-text' href='#'>Android App</a></p>
            <p><a className='footer-text' href='#'>iOS App</a></p>
            <p><a className='footer-text' href='#'>LCC Redeem</a></p>
          </div>
          <div className='footer-div'>
          <h6><strong>Legal</strong></h6>
            <p><a className='footer-text' href='#'>Terms of Service</a></p>
            <p><a className='footer-text' href='#'>Privacy Policy</a></p>
            <p><a className='footer-text' href='#'>Billing Policy</a></p>
          </div>
          <div className='footer-div'>
          <h6><strong>Connect with us</strong></h6>
          <div style={{display:'flex', wrapFlex:'wrap', marginBottom:'1rem'}}>          
                <img className='social' src={instagram} alt='instagram'/>
                <img  className='social'  src={facebook} alt='facebook'/>
                <img  className='social'  src={twitter} alt='twitter'/>
               
          </div>
          <p className='footer-text'>ecomartcars@gmail.com</p>
            <p><a className='footer-text' href='tel:+ 234 809 042 6105'>+ 234 123 678 9876</a></p>
            <p><a className='footer-text' href='tel:+ 234 809 042 3576'>+ 234 965 729 5963</a></p>
          </div>
        </footer>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  car: state.car,
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(Home);
