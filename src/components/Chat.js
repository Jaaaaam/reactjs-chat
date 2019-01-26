import React, { Component } from 'react'

export default class Chat extends Component {
  render() {
  return (
    <div className="chat-centered horizontal-center">
      <div className="chat-centered-content">
        <div className="chat-centered-response horizontal-center">
          <i class="material-icons">
            attach_file
          </i>
          <textarea  />
          <p>Send</p>
        </div>
      </div>
    </div>
  )
  }
}
