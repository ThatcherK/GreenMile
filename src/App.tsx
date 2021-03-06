import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'materialize-css';
import Authenticate from './components/context/Authenticate';
import Router from './components/routes/Router';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Authenticate>
          <Router />
        </Authenticate>
      </BrowserRouter>
    </div>
  );
};

export default App;
