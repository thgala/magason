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
          <ul className={this.element('list')}>
            <li className={this.element('item')}>
              <a href="" className={this.element('link')}>О компании</a>
            </li>
            <li className={this.element('item', {parent: true})}>
              <a href="" className={this.element('link')}>Каталог</a>
              <Menu topMenu className={this.element('menu')} />
            </li>
            <li className={this.element('item')}>
              <a href="" className={this.element('link')}>Доставка</a>
            </li>
            <li className={this.element('item')}>
              <a href="" className={this.element('link')}>Возврат</a>
            </li>
            <li className={this.element('item')}>
              <a href="" className={this.element('link')}>Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
