import { useEffect, useState } from 'react';

import CCatalogPageTemplate from './css-styles/c-catalog-page-template.js';
import ctAddPageTemplate from './css-styles/c-addprod-page-template.js';

import CtgElement from './../complex/c-ctg-element.js';
import BasketPanel from './../complex/c-basket-panel.js';

import { RouterFactory } from '../../componentRouter/componentRouter.js';
import { UserFactory } from './../../model/user.js';
import IOrouter from '../../IOrouter/IOrouter.js';

function CCatalog() {
  const [busket, setBusket] = useState(undefined);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    async function getCatalog() {
      try {
        const user = UserFactory.createInstance();
        const res = await IOrouter.getCatalog(user.getLogin(), user.getPassword());
        setElements(res);
      } catch (err) {
        console.log('Error to getting catalog:', err);
      }
    }
    getCatalog();
  }, []);

  function handleAddButton(event) {
    event.stopPropagation();
    const router = RouterFactory.createInstance();
    router.go('c-addprod-page');
  }

  function handleDelButton(event) {
    event.stopPropagation();
    const router = RouterFactory.createInstance();
    router.go('c-delprod-page');
  }

  function handleButtonClick(event, index) {
    event.stopPropagation();
    busket.addAttributeAtBusket(
      index,
      elements[index].product_id,
      elements[index].product_name,
      elements[index].img,
      elements[index].product_cost
    );
  }

  useEffect(() => {
    if (busket) {
      for (let i = 0; i < elements.length; i++) {
        const elem = (
          <CtgElement
            prod_id={elements[i].product_id}
            name={elements[i].product_name}
            desc={elements[i].product_count}
            cost={elements[i].product_cost}
            src={elements[i].img}
            onButtonClick={(event) => handleButtonClick(event, i)}
          />
        );
        const button = elem.props.children[2];
        button.props.onClick = (event) => handleButtonClick(event, i);
        const catalog = document.querySelector('.catalog');
        catalog.appendChild(elem);
      }
    }
  }, [busket, elements]);

  return ctAddPageTemplate({
    busket: busket,
    handleAddButton: handleAddButton,
    handleDelButton: handleDelButton,
    setBusket: setBusket,
  });
}

export default CCatalog;