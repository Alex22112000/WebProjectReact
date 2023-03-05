import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import CButtonTemplate from './css-styles/c-button-template.js';

function CButton(props) {
  const [cValue, setCValue] = useState('');

  function handleAttributeChange(attr, next) {
    if (attr === 'value') {
      setCValue(next);
    }
  }

  function getOriginButton() {
    return document.querySelector('.container .button');
  }

  return (
    <div className="container">
      {CButtonTemplate({ 
        _cValue: cValue, 
        handleAttributeChange, 
        getOriginButton 
      })}
    </div>
  );
}

export default CButton;