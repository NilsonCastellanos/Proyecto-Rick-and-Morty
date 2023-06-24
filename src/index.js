import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store  from './redux/store';
import App from './App';
import {BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import getCharById from './controllers/getCharById';


//const http = require("http")
//const getCharById = require("./controllers/getCharById")


http.createServer ((req, res) =>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  if(req.url.includes("rickandmorty/character")){
    let id = req.url.split("/").at(-1)
    getCharById(res, id)
  }
}).listen(3001, ()=> console.log("Port on 3001"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
