import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Chat from './components/Chat'
import './assets/sass/style.scss';
import socketIOClient from 'socket.io-client'

class App extends Component {
  state = {
    endpoint: 'http://localhost:4000/'
  }

  componentDidMount() {
    const { endpoint } = this.state
    const socket = socketIOClient(endpoint)
    socket.on('connectToRoom', (test) => {
      console.log(test, 'TEST')
    })
  }

  render() {
    
    return (
      <Fragment>
      <NavBar />
      <div className="main-wrapper">
        {/* <SideBar /> */}
        <Chat />
      </div>
      </Fragment>
    );
  }
}

export default App;
