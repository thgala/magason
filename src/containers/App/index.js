import React, { Component } from 'react';

/* global styles for app */
import './styles/app.scss';

/* application components */
import Header from 'components/header';
import Footer from 'components/footer';

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <section>
        <Header />
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
