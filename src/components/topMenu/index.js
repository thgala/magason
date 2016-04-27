import './index.scss';

import * as topMenuActions from 'actions/topMenu';
import * as bodyActions from 'actions/bodyActions';
import * as backgroundActions from 'actions/backgroundActions';

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
    topMenuActions: bindActionCreators(topMenuActions, dispatch),
    bodyActions: bindActionCreators(bodyActions, dispatch),
    backgroundActions: bindActionCreators(backgroundActions, dispatch)
  })
)
@bem({
  block: 'topMenu'
})
export default class TopMenu extends Component {

  constructor(props){
    super(props)
    this.menuTrigger = this.menuTrigger.bind(this)
  }

  menuTrigger(){
    const {
        topMenuActions,
        topMenu,
        bodyActions,
        backgroundActions,
      } = this.props

    topMenuActions.menuTrigger()
    bodyActions.bodyOverflowTrigger()
    backgroundActions.backdropTrigger()
  }

  render() {

    const { topMenu } = this.props

    return (
      <div className={this.block({
        open: topMenu.isMenuOpen
      })}>
        <div className={this.element('trigger')} onClick={this.menuTrigger} />
        <div className={this.element('content')}>
          <div className={this.element('triggerInContent')} onClick={this.menuTrigger} />
          <Menu topMenu />
        </div>
      </div>
    );
  }
}
