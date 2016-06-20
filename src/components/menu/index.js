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
        <li className={this.element('item', {type: 'case'})}><a href="" className={this.element('link')}>Кейсы и чехлы</a></li>
        <li className={this.element('item', {type: 'sticker'})}><a href="" className={this.element('link')}>Стикеры</a></li>
        <li className={this.element('item', {type: 'int'})}><a href="" className={this.element('link')}>Предметы интерьера</a></li>
        <li className={this.element('item', {type: 'decor'})}><a href="" className={this.element('link')}>Декор</a></li>
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
