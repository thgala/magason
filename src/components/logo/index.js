import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';


@bem({
  block: 'logo'
})
export default class Logo extends Component {
  render() {
    return (
      <div className={this.block()} />
    );
  }
}
