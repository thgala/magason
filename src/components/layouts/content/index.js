import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';


@bem({
  block: 'content',
  modifiers: ['long']
})
export default class Content extends Component {
  render() {
    return (
      <div className={this.block()}>
        {this.props.children}
      </div>
    );
  }
}
