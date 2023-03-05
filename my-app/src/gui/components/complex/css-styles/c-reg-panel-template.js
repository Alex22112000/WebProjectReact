import React from 'react';

import CLabel from './../../simple/c-label.js';
import CTextBar from './../../simple/c-textbar.js';

export default function CRegistrationPanelTemplate() {
  return (
    <div align="center" className="regstr">
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