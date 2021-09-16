import React  from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import './dist/css/bootstrap.min.css'
import './dist/vendors/scrollbar/perfect-scrollbar.css'
import './dist/css/master.css'
import Login from "./public/Login";
import Register from "./public/Register";
import Dashboard from "./secure/Dashboard";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        </div>
    );
}


export default App;

