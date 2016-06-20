import React, { Component } from 'react';

/* global styles for app */
import './styles/app.scss';

/* application components */
import BodyEffects from 'components/bodyEffects';
import BackgroundEffects from 'components/backgroundEffects';

import Header from 'components/header';
import Footer from 'components/footer';
import TopMenu from 'components/topMenu';

export default class App extends Component {
  render() {
    return (
      <section>
        <BodyEffects />
        <BackgroundEffects />

        <Header />
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
