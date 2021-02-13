import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import rootSaga from "./redux/gists/sagas/index";
import configureStore from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';

const customHistory = createBrowserHistory();

const initialState = {};
// let history = createBrowserHistory();
const store = configureStore(initialState, customHistory);
store.runSaga(rootSaga);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={customHistory}>
        <Component />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
};

render(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
