import React, { Component } from 'react';
import logo from './logo.svg';
import Styleguide from './blocks/Styleguide'
import Banner from './blocks/Banner'
import Footer from './blocks/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner title="Styleguide"/>
        <div className="main-container ml-auto mr-auto max-w-lg pt-4 pb-4 pl-3 pr-3" role="main">
            <Styleguide />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
