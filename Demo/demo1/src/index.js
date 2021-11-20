import React from 'react';
import ReactDOM from 'react-dom';
import Apple from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="container align-middle">
      <div className="row">
        <div className="col-sm"><Apple /></div>
        <div className="col-sm"><Apple /></div>
        <div className="col-sm"><Apple /></div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
