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
            backgroundImage: `url(${require(`./images/${this.props.data}.png`)})`
          }}/>

          <div className={this.element('info')}>
            <div className={this.element('brand')}>
              Kate Spade
            </div>
            <div className={this.element('name')}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div className={this.element('price')}>
              300 $
            </div>
            <div className={this.element('buttons')}>
              <Button success className={this.element('button')} link="http://google.com" target="_blank">
                Подробнее
              </Button>
              <Button className={this.element('button')}>
                Купить
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
