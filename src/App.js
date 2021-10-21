import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Erorr404 from "./auth/Erorr404";

// Routes
import Login from "./routes/login";
import Dashboard from "./routes/dashboard";
import Purchase from "./routes/purchase";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {Login}
          {Dashboard}
          {Purchase}
          <Route component={Erorr404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
