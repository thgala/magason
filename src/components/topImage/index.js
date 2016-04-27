import { TOP_IMAGE_BLOCK_HEIGHT_MINIMUM } from 'constants/widthAndHeight';
import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';
import Menu from 'components/menu';
import { setParallax } from 'utils/parallax';


@bem({
  block: 'topImage'
})
export default class TopImage extends Component {

  constructor(props){
    super(props)
    this.setImageBlockHeight = this.setImageBlockHeight.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      height: null
    }
  }

  componentDidMount(){
    this.setImageBlockHeight()
    window.addEventListener('resize', this.setImageBlockHeight)
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.setImageBlockHeight)
    window.removeEventListener('scroll', this.handleScroll)
  }


  setImageBlockHeight(){
    this.setState({
      height: window.innerHeight > TOP_IMAGE_BLOCK_HEIGHT_MINIMUM? window.innerHeight: TOP_IMAGE_BLOCK_HEIGHT_MINIMUM
    })
  }

  handleScroll(){
    setParallax(this.refs.parallax, 5);
  }


  render() {

    const styles = {
      height: this.state.height
    }

    return (
      <div className={this.block()} style={styles}>
        <div className={this.element('background')} ref="parallax" />
        <div className={this.element('title')}>
          MAGASON.
        </div>
        <Menu plusContent topImage />
      </div>
    );
  }
}

        // <div className={this.element('caption')}>
        //   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        // </div>
