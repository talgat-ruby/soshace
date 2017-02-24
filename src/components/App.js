import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import ModalDialog from './modal-dialog/ModalDialog';
import SideBar from './side-bar/SideBar';
import Main from './main/Main';

class App extends Component {
  render() {
    return (
      <div className="app">
      	<ModalDialog />
        <SideBar />
        <Switch>
          <Route exact path="/" component={ Main }/>
          <Route path="/:category" component={ Main }/> 
        </Switch>
      </div>
    );
  }
}

export default App;

