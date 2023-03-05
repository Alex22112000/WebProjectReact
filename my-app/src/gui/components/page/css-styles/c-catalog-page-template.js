
import BasketPanel from './../../complex/c-basket-panel.js';
import CtgElement from './../../complex/c-ctg-element.js';

import CButton from './../../simple/c-button.js';

function CCatalogPageTemplate(props) {
  const { elements } = props;

  const addProduct = () => {
    // handle add product button click
  };

  const deleteProduct = () => {
    // handle delete product button click
  };

  return (
    <div style={{position: 'absolute', top: '4.5vw', left: '20vw'}}>
      <BasketPanel />
      <CButton className="addProd" value="Добавить продукт" onClick={addProduct} />
      <br />
      <CButton className="delProd" value="Удалить продукт" onClick={deleteProduct} />

      <div className="catalog">
        {elements.map((element) => (
          <CtgElement
            key={element.product_id}
            id={element.product_id}
            name={element.product_name}
            desc={element.product_count}
            cost={element.product_cost}
            src={element.img}
          />
        ))}
      </div>
    </div>
  );
}

export default CCatalogPageTemplate;