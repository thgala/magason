import './index.scss';

import LoadingOrderAnimation from 'react-loading-order-with-animation';
import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';

import Button from 'components/button';


@bem({
  block: 'productsItem',
  modifiers: ['lastInRow']
})
export default class ProductsItem extends Component {

  render() {
    return (
      <div className={this.block()} {...this.props}>
        <div className={this.element('content')}>
          <div className={this.element('background')} style={{
            backgroundImage: `url(${require(`./images/${this.props.data}.jpg`)})`
          }}/>

          <div className={this.element('info')}>
            <div className={this.element('brand')}>
              Diesel blue sweater
            </div>
            <div className={this.element('price')}>
              300 $
            </div>
          </div>
        </div>
      </div>
    );
  }
}
