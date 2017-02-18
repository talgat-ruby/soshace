import React, { Component } from 'react';
import './App.css';

import SideBar from './side-bar/SideBar';
import Main from './main/Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SideBar />
        <Main />        
      </div>
    );
  }
}

export default App;
