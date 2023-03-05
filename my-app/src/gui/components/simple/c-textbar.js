import React from 'react';
import ReactDOM from 'react-dom';

import CTextBarTemplate from './css-styles/c-textbar-template.js';

class CTextBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cValue: "" };
    this.ref = React.createRef();
  }

  componentDidMount() {
    this._render();
  }

  componentWillUnmount() {
    // Do nothing
  }

  static get observedAttributes() {
    return ['value'];
  }

  attributeChangedCallback(attr, prev, next) {
    if (prev !== next) {
      if (attr === 'value') {
        this.setState({ cValue: next });
      }
    }
    this._render();
  }

  getValue() {
    return this.ref.current.querySelector(".textbar").value;
  }

  _render() {
    if (!this.ref.current) return;
    const shadowRoot = this.ref.current.shadowRoot;
    shadowRoot.innerHTML = CTextBarTemplate(this);
  }

  render() {
    return <c-textbar ref={this.ref}></c-textbar>;
  }
}

export default CTextBar;