import * as productsActions from 'actions/productsActions';

import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

/* components */
import TopImage from 'components/topImage';
import ProductsList from 'components/products/list';


const metaData = {
  title: 'Redux Easy Boilerplate',
  description: 'Start you project easy and fast with modern tools',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};


@connect(
  null,
  dispatch => ({
    productsActions: bindActionCreators(productsActions, dispatch)
  })
)
export default class Home extends Component {

  componentWillMount(){
    this.props.productsActions.getProducts()
  }

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <TopImage />
        <ProductsList />
      </section>
    );
  }
}
