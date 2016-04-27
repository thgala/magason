import './index.scss';

import React, { Component } from 'react';
import {connect} from 'react-redux';


@connect(
  state =>({
    body: state.body
  })
)
export default class BodyEffects extends Component {

  componentWillReceiveProps(nextProps){
    const { body } = this.props

    if(nextProps.body !== body){

      // Set overflow "hidden"
      nextProps.body.isOverflowed?(
        document.body.classList.add("overflowed")
      ):(
        document.body.classList.remove("overflowed")
      )

    }
  }


  render() {
    return null
  }
}
