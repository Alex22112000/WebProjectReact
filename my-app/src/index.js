import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import cPLogin from "./gui/components/page/c-log-page.js";

const root = ReactDOM.createRoot(document.getElementById('root'))

const userLogin = (<cPLogin/>);

const router = (
<Router>
  <div>
    <Routes>
    <Route path="/" element={userLogin}/>
    <Route path="/userLogin" element={userLogin}/>
    </Routes>
  </div>
</Router>
)

root.render(router);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals