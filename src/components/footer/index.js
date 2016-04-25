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


@bem({
  block: 'footer'
})
export default class Footer extends Component {
  render() {
    return (
      <footer className={this.block()}>
        <Menu footer />
        <div className={this.element('copyrights')}>
          © 2016, Magason. All rights reserved
        </div>
      </footer>
    );
  }
}
