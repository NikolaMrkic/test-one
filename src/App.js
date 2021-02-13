import React from 'react';
import './App.css';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import '../src/index.css'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
