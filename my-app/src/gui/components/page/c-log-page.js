import React, { Component } from 'react';

import CLogPageTemplate from './css-styles/c-log-page-template.js';

import CLogPanel from './../complex/c-log-panel.js';
import CButton from './../simple/c-button.js';

import { RouterFactory } from '../../componentRouter/componentRouter.js';
import { UserFactory } from './../../model/user.js';
import IOrouter from '../../IOrouter/IOrouter.js';

class CLogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
    this.auth = this.auth.bind(this);
    this.goReg = this.goReg.bind(this);
  }

  auth(event) {
    event.stopPropagation();
    const user = UserFactory.createInstance();
    user.setLogin(this.state.login);
    user.setPassword(this.state.password);
    const router = RouterFactory.createInstance();

    IOrouter.signIn(user.getLogin(), user.getPassword())
      .then((res) => {
        user.setPassword(res);
        router.go('c-catalog-page');
      })
      .catch((err) => {
        console.log('Error authorisation: ' + err);
        router.go('c-log-page');
      });
  }

  goReg(event) {
    event.stopPropagation();
    const router = RouterFactory.createInstance();
    router.go('c-reg-page');
  }

  render() {
    return (
      <div className="lpage">
        <CLogPanel
          ref={(logPanel) => (this.logPanel = logPanel)}
          onLoginChange={(e) => this.setState({ login: e.target.value })}
          onPasswordChange={(e) => this.setState({ password: e.target.value })}
        />
        <CButton className="logButton" onClick={this.auth}>
          Login
        </CButton>
        <CButton className="regButton" onClick={this.goReg}>
          Register
        </CButton>
      </div>
    );
  }
}

export default CLogPage;
