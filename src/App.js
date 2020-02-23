import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import {InstallmentProvider} from "./contexts/InstallmentContext";
import Calculator from "./components/calculator/Calculator";
import DisplayInformation from "./components/displayInformation/DisplayInformation";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <InstallmentProvider>
              <Calculator />
              <DisplayInformation />
            </InstallmentProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );

}

export default App;
