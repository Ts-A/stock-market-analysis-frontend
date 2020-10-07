import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Analysis } from './pages/Analysis';
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const App = () => {
  return (
      <Router>
          <Navbar />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Home} />
            <Route exact path="/analysis" component={Analysis} />
            <Route exact path="/company" component={Company} />
          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
