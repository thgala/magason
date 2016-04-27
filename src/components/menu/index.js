import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';

import Content from 'components/layouts/content';


@bem({
  block: 'menu',
  modifiers: ['plusContent', 'topImage', 'footer', 'topMenu']
})
export default class Menu extends Component {
  render() {

    const menuList =
      <ul className={this.element('list')}>
        <li className={this.element('item')}><a href="" className={this.element('link')}>Главная</a></li>
        <li className={this.element('item')}><a href="" className={this.element('link')}>Каталог</a></li>
        <li className={this.element('item')}><a href="" className={this.element('link')}>Доставка</a></li>
        <li className={this.element('item')}><a href="" className={this.element('link')}>Контакты</a></li>
      </ul>

    return (
      <div className={this.block()}>
        {this.props.plusContent?(
          <Content>
            {menuList}
          </Content>
        ):menuList}
      </div>
    );
  }
}
