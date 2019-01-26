import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left-content">
          <i class="material-icons">
          search
          </i>
          <input></input>
        </div>
        <div className="navbar-header uppercase">
          Chat Up
        </div>
        <div className="navbar-right-content uppercase">
          <ul>
            <li>Download App</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    )
  }
}
