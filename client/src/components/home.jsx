import React, { Component, useState, useEffect } from "react";
import logo from "../logo.svg";
import { getItems, deleteItem } from "../actions/postAction";
import { connect } from "react-redux";

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
<<<<<<< HEAD
      
=======
       
>>>>>>> abbdbb6af4a7f9dfc6d65f692164fa8438df5450
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
