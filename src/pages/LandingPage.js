import React, { Component, createRef } from 'react';

import Header from 'parts/Header';
import landingPage from 'json/landingPage.json';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Category from 'parts/Category';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Category data={landingPage.categories} />
      </>
    );
  }
}
