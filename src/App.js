import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Erorr404 from "./auth/Erorr404";
// All Routes Importet here.
import RouterList from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {RouterList}
          <Route component={Erorr404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
