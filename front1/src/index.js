import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbaroff from './users/Navbaroff';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Aftersigninmaker } from './Aftersigninmaker';
import Aftersigninuser from './Aftersigninuser';
import Routing from './Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <BrowserRouter>
  <Aftersigninuser />
</BrowserRouter>
);*/
root.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>
)

