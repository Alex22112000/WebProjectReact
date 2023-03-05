import React from 'react';
import CLogPanel from './../../complex/c-log-panel.js';
import CButton from './../../simple/c-button.js';

import {UserFactory}  from './../../../model/user.js';
import {RouterFactory} from './../../../componentRouter/componentRouter.js';
import IOrouter from './../../../IOrouter/IOrouter.js';

export default function CLogPageTemplate(props) {
  function handleClickAuth(event) {
    event.stopPropagation();
    const user = UserFactory.createInstance();
    user.setLogin(document.querySelector(".lpage").querySelector(".logPanel").getLogin());
    user.setPassword(document.querySelector(".lpage").querySelector(".logPanel").getPassword());
    const router = RouterFactory.createInstance();

    IOrouter.signIn(user.getLogin(), user.getPassword()).then((res)=>{
      user.setPassword(res);
      router.go("c-catalog-page");
    }).catch((err)=>{
      console.log("Error authorisation: " + err);
      router.go("c-log-page");
    });
  }

  function handleClickReg(event) {
    event.stopPropagation();
    const router = RouterFactory.createInstance(); 
    router.go("c-reg-page");
  }

  return (
    <div align="center" className="lpage">
      <CLogPanel id="c-log-panel" className="logPanel" />
      <CButton value="Войти" className="logButton" onClick={handleClickAuth} />
      <br />
      <CButton value="Регистрация" className="regButton" onClick={handleClickReg} />
    </div>
  );
}
