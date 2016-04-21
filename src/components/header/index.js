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
  block: 'header'
})
export default class Header extends Component {
  render() {
    return (
      <header className={this.block()}>
        <Content>
          <Row cols={[3, 3, 3]}>
            <Col>
              <HeaderLSContent />
            </Col>
            <Col>
              <Logo />
            </Col>
            <Col />
          </Row>
        </Content>
        <Menu plusContent />
      </header>
    );
  }
}
