import React, { Component, useState, useEffect } from "react";

import { getItems, deleteItem } from "../actions/postAction";
import { connect } from "react-redux";
import Items from "./items";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

class Home extends Component {
  state = { activeIndex: 0 };

  componentWillMount() {
    this.props.getItems();
  }

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.item.items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.item.items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { items } = this.props.item;
    const { isAuthenticated, user } = this.props.auth;
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item._id}
        >
          <img
            style={{ width: "100%", height: "500px" }}
            src={item.image_url}
            alt={item.manufacturer}
          />
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
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={this.previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={this.next}
                />
              </Carousel>
            </div>
            <div class="slider" id="slide-right" />
          </div>
          <Items />
        </div>
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
)(Home);
