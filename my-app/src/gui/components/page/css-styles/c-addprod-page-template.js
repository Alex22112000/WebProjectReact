import React from 'react';

import CTextBar from './../../simple/c-textbar.js';
import CButton from './../../simple/c-button.js';

function ctAddPageTemplate(props) {
  return (
    <ul className="panel">
      <li className="nm">
        Название:<br />
        <CTextBar className="name" />
      </li>
      <br />
      <li className="cs">
        Стоимость:<br />
        <CTextBar className="cost" />
      </li>
      <br />
      <li className="im">
        Ссылка на изображение:<br />
        <CTextBar className="img" />
      </li>
      <br />
      <li className="ct">
        Количество:<br />
        <CTextBar className="count" />
      </li>
      <br />
      <li className="bt">
        <CButton value="Добавить" />
      </li>
      <br />
      <li className="btBack">
        <CButton value="Назад" />
      </li>
      <div className="message"></div>
    </ul>
  );
}

export default ctAddPageTemplate;
