import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Chat from './components/Chat'
import './assets/sass/style.scss';
import socketIOClient from 'socket.io-client'

class App extends Component {
  state = {
    endpoint: 'http://localhost:4000/',
    socketData: {}
  }

  componentDidMount() {
    const { endpoint } = this.state
    const socket = socketIOClient(endpoint)
    socket.on('connectToRoom', (socketData) => {
      console.log(socketData, 'TEST')

      this.setState({
        socketData
      })
    })
  }

  render() {
    const { socketData } = this.state
    return (
      <Fragment>
      <NavBar />
      <div className="main-wrapper">
        {/* <SideBar /> */}
        <Chat socketData={socketData} />
      </div>
      </Fragment>
    );
  }
}

export default App;
