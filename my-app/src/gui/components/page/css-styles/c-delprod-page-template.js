
import CBasketPanel from './../../complex/c-basket-panel.js';
import CButton from './../../simple/c-button.js';

export default function CDelPageTemplate (func) {
  return (
    <>
      <style>
        {`
          div {
            position: absolute;
            top: 4.5vw;
            left: 20vw;
          }
        `}
      </style>

      <CBasketPanel className="busket" />

      <CButton className="addProd" value="Добавить продукт" />
      <br />
      <CButton className="delProd" value="Удалить продукт" />

      <div className="catalog">{/* Some content */}</div>
    </>
  );
}