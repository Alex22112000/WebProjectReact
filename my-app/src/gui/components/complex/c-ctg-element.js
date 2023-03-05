import React from 'react';

import ctElementTemplate from './css-styles/c-ctg-element-template.js';

import CButton from './../simple/c-button.js';
import CLabel from './../simple/c-label.js';

class ctElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _prod_id: '',
      _name: '',
      _src: '',
      _desc: '',
      _cost: '',
    };
  }

  componentDidMount() {
    this._render();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this._render();
    }
  }

  static get observedAttributes() {
    return ['prod_id', 'name', 'src', 'desc', 'cost'];
  }

  attributeChangedCallback(attr, prev, next) {
    if (prev !== next) {
      if (attr === 'name') {
        this.setState({ _name: next });
      } else if (attr === 'src') {
        this.setState({ _src: next });
      } else if (attr === 'desc') {
        this.setState({ _desc: next });
      } else if (attr === 'cost') {
        this.setState({ _cost: next });
      } else if (attr === 'prod_id') {
        this.setState({ _prod_id: next });
      }
    }
  }

  _listener(event) {}

  _render() {
    const shadowRoot = this.shadowRoot || this.attachShadow({ mode: 'open' });
    if (!shadowRoot.ownerDocument.defaultView) return;
    shadowRoot.innerHTML = ctElementTemplate(this);
  }

  render() {
    return <div ref={(el) => (this.shadowRoot = el)}></div>;
  }
}

export default ctElement;
