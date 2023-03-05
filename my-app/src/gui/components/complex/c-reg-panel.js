import React from 'react';

import CButton from './../simple/c-button.js';
import CLabel from './../simple/c-label.js';
import CTextBar from './../simple/c-textbar.js';

import CRegistrationPanelTemplate from './css-styles/c-reg-panel-template.js';

class CRegPanel extends React.Component {
  constructor() {
    super();
    this.getLogin = this.getLogin.bind(this);
    this.getPassword = this.getPassword.bind(this);
  }

  getLogin() {
    return this.shadowRoot.querySelector('.regstr').querySelector('.login_bar').getValue();
  }

  getPassword() {
    return this.shadowRoot.querySelector('.regstr').querySelector('.password_bar').getValue();
  }

  render() {
    return (
      <div className="auth">
        <CLabel value="Регистрация" />
        <br />
        <br />
        <CLabel value="Логин" />
        <CTextBar className="login_bar" />
        <br />
        <br />
        <CLabel value="Пароль" />
        <CTextBar className="password_bar" />
        <br />
        <br />
      </div>
    );
  }
}

export default CRegPanel;