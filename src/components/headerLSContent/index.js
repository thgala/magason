import './index.scss';

import React, { Component } from 'react';
import LoadingOrderAnimation from 'react-loading-order-with-animation';
import { Link } from 'react-router';
import bem from 'react-bem-classes';
import { setParallax } from '../../utils/parallax';

import Content from 'components/layouts/content';
import Menu from 'components/menu';


@bem({
  block: 'headerLSContent'
})
export default class HeaderLSContent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    setParallax(this.refs.parallax, 10);
  };

  render() {
    return (
      <section className={this.block()} ref="parallax">
        <Content>
          <LoadingOrderAnimation animation="fade-in"
            speed={700}
            wait={700}>
            <h1 className={this.element('title')}>
              Magason.
            </h1>
          </LoadingOrderAnimation>
          <LoadingOrderAnimation animation="fade-in"
            speed={1200}
            wait={900}>
            <div className={this.element('caption')}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </div>
          </LoadingOrderAnimation>
        </Content>
      </section>
    );
  }
}
