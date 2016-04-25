import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';

import Responsive from 'components/layouts/responsive';
import Content from 'components/layouts/content';
import ProductsItem from 'components/products/item';


@bem({
  block: 'productsList'
})
export default class ProductsList extends Component {

  render() {

    const respnsiveSettings = {
      itemsInRow: {
        lg: 4,
        md: 3,
        sm: 2,
        xs: 2,
        xss: 1
      }
    }

    return (
      <div className={this.block()}>
        <Content long>
          <Responsive {...respnsiveSettings} >
            {Array.from({ length: 8 },(a, i)=> <ProductsItem key={i} data={i} /> )}
          </Responsive>
        </Content>
      </div>
    );
  }
}
