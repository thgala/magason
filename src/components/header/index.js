import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';

import Row from 'components/layouts/grid/row';
import Col from 'components/layouts/grid/col';

import Content from 'components/layouts/content';
import Menu from 'components/menu';
import HeaderLSContent from 'components/headerLSContent';
import Logo from 'components/logo';
import TopMenu from 'components/topMenu';


@bem({
  block: 'header'
})
export default class Header extends Component {
  render() {
    return (
      <header className={this.block()}>
        <Content>
          <div className={this.element('topRow')}>
            <TopMenu />
            <Logo />
            <div className={this.element('shoppingCart')}>
              <div className={this.element('shoppingCartInfo')}>
                <div className={this.element('shoppingCartQuantity')}>
                  Товаров: 0
                </div>
                <div className={this.element('shoppingCartTotal')}>
                  0.00 $
                </div>
              </div>
              <div className={this.element('shoppingCartIcon')} />
            </div>
          </div>
        </Content>
        <div className={this.element('menuBackdrop')}>
          <Menu plusContent />
        </div>
      </header>
    );
  }
}
