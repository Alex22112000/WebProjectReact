import React, { useState, useEffect } from 'react';

import CDelPageTemplate from './css-styles/c-delprod-page-template.js';
import CButton from './../simple/c-button.js';
import CLabel from './../simple/c-label.js';

import { RouterFactory } from '../../componentRouter/componentRouter.js';
import IOrouter from '../../IOrouter/IOrouter.js';

function CDelPage() {
  const [panelMessage, setPanelMessage] = useState('');

  const handleDelClick = (event) => {
    event.stopPropagation();
    const panel = event.target.closest('.panel');
    const name = panel.querySelector('.nm .name').getValue();
    IOrouter.delProduct(name)
      .then(() => {
        setPanelMessage('<br> Продукт успешно удален.');
      })
      .catch((err) => {
        setPanelMessage('<br> Ошибка удаленния.');
        console.log(`Error to deleting product: ${err}`);
      });
  };

  const handleBackClick = (event) => {
    event.stopPropagation();
    const router = RouterFactory.createInstance();
    router.go('c-catalog-page');
  };

  useEffect(() => {
    const panel = document.querySelector('.panel');
    panel.querySelector('.bt').addEventListener('click', handleDelClick);
    panel.querySelector('.btBack').addEventListener('click', handleBackClick);
    return () => {
      panel.querySelector('.bt').removeEventListener('click', handleDelClick);
      panel.querySelector('.btBack').removeEventListener('click', handleBackClick);
    };
  }, []);

  return (
    <div>
      <style>
        {`
          div {
            position: absolute;
            top: 4.5vw;
            left: 20vw;
          }
        `}
      </style>
      <c-basket-panel class="busket"></c-basket-panel>
      <CButton class="addProd" value="Добавить продукт"></CButton>
      <br />
      <CButton class="delProd" value="Удалить продукт"></CButton>

      <div className="catalog"></div>

      <div className="panel">
        <CLabel class="nm" value="Введите название товара для удаления: "></CLabel>
        <input type="text" class="name" />
        <br />
        <CButton class="bt" value="Удалить"></CButton>
        <CButton class="btBack" value="Назад"></CButton>
        <CLabel class="message" value={panelMessage} />
      </div>
    </div>
  );
}

export default CDelPage;