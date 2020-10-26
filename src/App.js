import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Analysis } from "./pages/Analysis";
import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/analysis" component={Analysis} />
        <Route exact path="/company" component={Company} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
