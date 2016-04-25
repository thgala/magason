import React, { Component } from 'react';

/* global styles for app */
import './styles/app.scss';

/* application components */
import Header from 'components/header';
import Footer from 'components/footer';
import TopMenu from 'components/topMenu';

export default class App extends Component {
  render() {
    return (
      <section>
        <TopMenu />
        <Header />
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
