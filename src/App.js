import React, { Component } from 'react';
import Home from './templates/Home'
//import Styleguide from './templates/Styleguide'
//import Blocks from './templates/Blocks'
import Privacy from './templates/Privacy'
import Resume from './templates/Resume'
import MyLinks from './templates/MyLinks'
//import Auth from './templates/Auth'
//import InstagramFeed from './templates/Instagram'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const NotFound = () => (
    <div>
        404!
    </div>
);

class App extends Component {
  render() {
    return (
        <Router>
            <div className="app">
                <Header />
                  <Switch className="App">
                      <Route
                          path="/"
                          exact
                          component={Home} />
                      {/* <Route path="/styleguide" component={Styleguide} /> */}
                      {/* <Route path="/blocks" component={Blocks} /> */}
                      <Route path="/privacy" component={Privacy} />
                      <Route path="/resume" component={Resume} />
                      <Route path="/my-links" component={MyLinks} />
                      {/* <Route path="/auth" component={Auth} /> */}
                      {/* <Route path="/instagram-feed" component={InstagramFeed} /> */}
                      <Route component={NotFound} />
                  </Switch>
                <Footer />
            </div>
        </Router>
    );
  }
}

export default App;
