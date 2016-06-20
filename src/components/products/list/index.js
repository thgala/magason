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
        xs: 1
      }
    }

    var x = 0;

    return (
      <div className={this.block()}>
        <Content>
          <div className={this.element('category')}>
            <div className={this.element('categoryInfo')}>
              Подберите кейс или чехол для своего устройства по своему вкусу
            </div>
            <ul className={this.element('subCategories')}>
              <li className={this.element('subCategoriesItem')}>
                iPhone
              </li>
              <li className={this.element('subCategoriesItem')}>
                iPad
              </li>
              <li className={this.element('subCategoriesItem')}>
                Laptops
              </li>
              <li className={this.element('subCategoriesItem', {active: true})}>
                Все
              </li>
            </ul>
          </div>
          <Responsive {...respnsiveSettings} >
            {Array.from({ length: 16 },(a, i)=> {
              x += 1;
              if(x === 7) x = 0;
              return <ProductsItem key={i} data={x} />
            })}
          </Responsive>
        </Content>
      </div>
    );
  }
}
