import '../node_modules/bootstrap3/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './template/custom.css'

import React, { Component } from 'react';
import Menu from './template/Menu'
import Routes from './routes'


class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu/>
        <Routes/>
      </div>
    );
  }
}

export default App;
