import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './dist/css/bootstrap.min.css'
import './dist/css/master.css'
import ProtectedRoute from './components/ProtectedRoute'
import Login from "./auth/Login";
//import Register from "./auth/Register";
import Dashboard from "./secure/Dashboard/Dashboard";
import Erorr404 from "./auth/erorr404";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <ProtectedRoute exact path="/admin" component={Dashboard} />
                    <ProtectedRoute path="*" component={Erorr404} />
                </Switch>
            </Router>
        </div>
    );
}


export default App;

