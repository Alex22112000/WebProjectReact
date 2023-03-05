import React from 'react';
import ReactDOM from 'react-dom';

import CLabelTemplate from './css-styles/c-button-template.js';

class CLabel extends React.Component {
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

  _render() {
    if (!this.ref.current) return;
    const shadowRoot = this.ref.current.shadowRoot;
    shadowRoot.innerHTML = CLabelTemplate(this);
  }

  render() {
    return <c-label ref={this.ref}></c-label>;
  }
}

export default CLabel;