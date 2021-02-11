import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'materialize-css';
import Authenticate from './components/context/Authenticate';
import Router from './components/routes/Router';
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(BrowserRouter, null,
            React.createElement(Authenticate, null,
                React.createElement(Router, null)))));
}
export default App;
