import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Chat from './components/Chat'
import './assets/sass/style.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
      <NavBar />
      <div className="main-wrapper">
        <SideBar />
        <Chat />
      </div>
      </Fragment>
    );
  }
}

export default App;
