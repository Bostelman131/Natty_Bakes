import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer, Menu, Home } from './components';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/menu' component={Menu}/>
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
