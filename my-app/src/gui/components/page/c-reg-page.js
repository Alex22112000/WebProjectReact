import React, { Component } from 'react';

import CRegPageTemplate from './css-styles/c-reg-page-template.js';

import CRegPanel from './../complex/c-reg-panel.js';
import CLogPanel from './../complex/c-log-panel.js';
import CButton from './../simple/c-button.js';

import { RouterFactory } from '../../componentRouter/componentRouter.js';
import { UserFactory } from './../../model/user.js';
import IOrouter from '../../IOrouter/IOrouter.js';

class CRegPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
    this._reg = this._reg.bind(this);
    this._goAuth = this._goAuth.bind(this);
  }

  _reg(event) {
    event.stopPropagation();
    const user = UserFactory.createInstance();
    user.setLogin(this.state.login);
    user.setPassword(this.state.password);
    const router = RouterFactory.createInstance();
    IOrouter.signUp(user.getLogin(), user.getPassword())
      .then((res) => {
        router.go('c-log-page');
      })
      .catch((err) => {
        console.log('Error registration: ' + err);
        router.go('c-reg-page');
      });
  }

  _goAuth(event) {
    event.stopPropagation();
    const router = RouterFactory.createInstance();
    router.go('c-log-page');
  }

  render() {
    return (
      <div align="center" className="rpage">
        <CRegPanel className="rpanel" onChange={(login, password) => this.setState({ login, password })} />
        <CButton value="Отправить" className="sendBtn" onClick={this._reg} />
        <br />
        <CButton value="Назад" className="backBtn" onClick={this._goAuth} />
      </div>
    );
  }
}

export default CRegPage;