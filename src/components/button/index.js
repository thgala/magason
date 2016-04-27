import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';


@bem({
  block: 'button',
  modifiers: ['info', 'success', 'danger']
})
export default class Button extends Component {
  render() {

    const {link, target} = this.props

    return !link?(
      <div className={this.block()}>
        {this.props.children}
      </div>
    ):(
      <Link to={link} className={this.block()} target={target}>
        {this.props.children}
      </Link>
    )
  }
}
