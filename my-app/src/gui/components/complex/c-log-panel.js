import React from 'react';

import CButton from './../simple/c-button.js';
import CLabel from './../simple/c-label.js';
import CTextBar from './../simple/c-textbar.js';

import CLoginPanelTemplate from './css-styles/c-log-panel-template.js'

class CLogPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };
  }

  getLogin() {
    return this.shadowRoot.querySelector(".auth").querySelector(".login_bar").getValue();
  }

  getPassword() {
    return this.shadowRoot.querySelector(".auth").querySelector(".password_bar").getValue();
  }

  render() {
    return (
      <div className="c-log-panel">
        <div className="auth">
          <CLabel>Логин:</CLabel>
          <CTextBar className="login_bar" />
          <CLabel>Пароль:</CLabel>
          <CTextBar className="password_bar" />
          <CButton className="auth_button">Войти</CButton>
        </div>
      </div>
    );
  }
}

export default CLogPanel;