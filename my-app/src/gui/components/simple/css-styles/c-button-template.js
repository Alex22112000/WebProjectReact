import React from 'react';

export default function CButtonTemplate(props) {
  const { onClick, children, cValue } = props;

  return (
    <div className="container">
      <button
        className="button"
        onClick={onClick}
        style={{
          borderRadius: '8px',
          borderStyle: 'none',
          boxSizing: 'border-box',
          color: 'rgb(10,10,10)',
          cursor: 'pointer',
          flexShrink: 0,
          fontFamily: '"Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          width: '180px',
          height: '3rem',
          padding: '0 1.6rem',
          textAlign: 'center',
          textShadow: 'rgba(0, 0, 0, 0.25) 0 3px 8px',
          transition: 'all .5s',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          touchAction: 'manipulation',
          border: 'solid',
          borderWidth: '2px',
          borderColor: 'rgb(33, 16, 78)',

          boxShadow: 'rgba(0, 255, 46, 255) 0 1px 30px',
          transitionDuration: '.1s'
        }}
      >
        {props.children}
        {cValue}
      </button>
    </div>
  );
}