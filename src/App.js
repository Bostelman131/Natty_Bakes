import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer, Menu, Home } from './components';
import { NotFound } from 'components';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/Menu' component={Menu}/>
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
