import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./auth/Login";
import Dashboard from "./secure/Dashboard/Dashboard";
import Purchase from "./secure/Dashboard/Purchase";
import PurchaseAll from "./secure/Dashboard/PurchaseAll";
import Erorr404 from "./auth/Erorr404";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/admin" component={Dashboard} />
          <ProtectedRoute path="/purchase/add" component={Purchase} />
          <ProtectedRoute path="/purchase" component={PurchaseAll} />
          <Route component={Erorr404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
