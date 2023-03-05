import React from 'react';

import CButton from './../simple/c-button.js';
import CLabel from './../simple/c-label.js';

import { RouterFactory } from '../../componentRouter/componentRouter.js';
import IOrouter from '../../IOrouter/IOrouter.js';

import ctAddPageTemplate from './css-styles/c-addprod-page-template.js';

class CtAddPage extends React.Component {
  constructor(props) {
    super(props);
    this.panelRef = React.createRef();
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleAddClick(event) {
    event.stopPropagation();
    const panel = this.panelRef.current;
    const name = panel.querySelector('.nm').querySelector('.name').getValue();
    const cost = panel.querySelector('.cs').querySelector('.cost').getValue();
    const img = panel.querySelector('.im').querySelector('.img').getValue();
    const count = panel.querySelector('.ct').querySelector('.count').getValue();

    IOrouter.postNewProduct(name, cost, count, img)
      .then(() => {
        panel.querySelector('.message').innerHTML = '<br> Продукт успешно добавлен в каталог.';
      })
      .catch((err) => {
        panel.querySelector('.message').innerHTML = '<br> Ошибка добавления в каталог.';
        console.log('Error to adding new product: ' + err);
      });
  }

  handleBackClick(event) {
    event.stopPropagation();
    const router = RouterFactory.createInstance();
    router.go('c-catalog-page');
  }

  render() {
    return (
      <ctAddPageTemplate
        ref={this.panelRef}
        onAddClick={this.handleAddClick}
        onBackClick={this.handleBackClick}
      />
    );
  }
}

export default CtAddPage;