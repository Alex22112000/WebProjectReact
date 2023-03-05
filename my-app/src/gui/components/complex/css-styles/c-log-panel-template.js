import React from 'react';

import CLabel from './../../simple/c-label.js';
import CTextBar from './../../simple/c-textbar.js';

export default function CLoginPanelTemplate() {
  return (
    <div align="center" className="auth">
      <CLabel value="Авторизация" />
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