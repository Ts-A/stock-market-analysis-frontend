import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Analysis } from "./pages/Analysis";
import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ToastProvider } from "react-toast-notifications";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/analysis" component={Analysis} />
          <Route exact path="/company/:BOMcode" component={Company} />{" "}
          {/*Type /company/BOM500002*/}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </ToastProvider>
    </Router>
  );
};

export default App;
