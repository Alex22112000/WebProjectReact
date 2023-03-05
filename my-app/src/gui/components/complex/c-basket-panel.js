import React from 'react';

import CBasketPanelTemplate from './css-styles/c-basket-panel-template.js';

import './../simple/c-button.js';
import './../simple/c-label.js';

import {busketProduct} from './../../model/busketProduct.js';

class CtBusket extends React.Component {
  constructor() { 
    super();
    this.props.productlist = new Array();
    this.ref = React.createRef();
  }

  addAttributeAtBusket(index, prod_id, prod_name, img_src, cost) {
    this.productlist.push(new busketProduct(index, prod_id, prod_name, img_src, cost));
    let line = this.ref.current.querySelector(".dropdownContainer").querySelector(".dropdownContent")
      .querySelector(".dropdownContentLineMessage");
    line.innerHTML = "";
    for(let i = 0; i < this.productlist.length; i++){
      line.innerHTML += this.productlist[i].prod_name + "   " + this.productlist[i].cost + " руб <br><br>";
    }
  } 

  render() {  
    return (
      <div ref={this.ref}>
        {CBasketPanelTemplate(this)}
      </div>
    )
  }
}

export default CtBusket;
