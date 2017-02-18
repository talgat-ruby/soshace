import React, { Component } from 'react';
import './App.css';

import MainHeader from './main-header/MainHeader';
import Categories from './categories/Categories';
import Main from './main/Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MainHeader />
        <Categories />
        <Main />        
      </div>
    );
  }
}

export default App;
