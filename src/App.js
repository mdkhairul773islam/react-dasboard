import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dist/css/master.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./auth/Login";
import Dashboard from "./secure/Dashboard/Dashboard";
import Purchase from "./secure/Dashboard/Purchase";
import PurchaseAll from "./secure/Dashboard/PurchaseAll";
import Erorr404 from "./auth/erorr404";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/admin" component={Dashboard} />
          <ProtectedRoute path="/purchase/add" component={Purchase} />
          <ProtectedRoute path="/purchase/all" component={PurchaseAll} />
          <ProtectedRoute path="*" component={Erorr404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
