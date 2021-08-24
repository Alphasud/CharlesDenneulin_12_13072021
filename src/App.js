
import './App.scss';
import React from "react";
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import ErrorPage from './Components/ErrorPage';
import Container from './Components/Container';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Router>
        <Switch>
          <Route exact path="/:id" component={Container} />
            <Route path="*" component={ErrorPage} />
          </Switch>
      </Router>
    </div>
  );
}
export default App;
