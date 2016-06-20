import './index.scss';

import React, { Component } from 'react';
import {connect} from 'react-redux';
import bem from 'react-bem-classes';


@connect(
  state =>({
    background: state.background
  })
)
@bem({
  block: 'backgroundEffects'
})
export default class BackgroundEffects extends Component {

  render() {

    const { background } = this.props

    return (
      <div className={this.block()}>
        <div className={this.element('backdrop', {
          active: background.isBackdropActive
        })} />
        <div className={this.element('thinLine')} />
      </div>
    )
  }
}
