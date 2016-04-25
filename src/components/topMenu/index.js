import './index.scss';

import * as actions from 'actions/topMenu';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Menu from 'components/menu';


@connect(
  state =>({
    topMenu: state.topMenu
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)
@bem({
  block: 'topMenu'
})
export default class TopMenu extends Component {
  render() {

    const { actions, topMenu } = this.props

    return (
      <div className={this.block({
        open: topMenu.isMenuOpen
      })}>
        <div className={this.element('trigger')} onClick={actions.menuTrigger.bind(this, !topMenu.isMenuOpen)} />
        <div className={this.element('content')}>
          <Menu topMenu />
        </div>
      </div>
    );
  }
}
