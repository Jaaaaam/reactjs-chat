import React, { Component } from 'react'

export default class Chat extends Component {
  render() {
  return (
    <div className="chat-centered horizontal-center">
      <div className="chat-centered-content">
        <div className="chat-centered-conversation">
          <div className="conversation-item">
            <div 
            className="round-image"
            style= {
              {background: "url('/images/default-profile.jpg')"}
            }>
            </div>
            <div className="chat-bubble margin-left">
              Hello!!! How are you?
            </div>
          </div>
          <div className="conversation-item">
            <div 
            className="round-image"
            style= {
              {background: "url('/images/default-profile.jpg')"}
            }>
            </div>
            <div className="chat-bubble margin-left left">
              Are you there?
            </div>
          </div>
          <div className="conversation-item">
            <div 
            className="round-image"
            style= {
              {background: "url('/images/default-profile.jpg')"}
            }>
            </div>
            <div className="chat-bubble margin-left left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget aliquet tellus. Nulla viverra laoreet nisl quis convallis. Ut vel mattis dolor. Cras porta cursus nisl a finibus. Morbi fermentum orci nec feugiat sagittis. Morbi eget magna mattis, posuere nibh ac, volutpat eros. Aliquam erat volutpat. Fusce metus magna, tincidunt vitae luctus luctus, elementum ut ex.
            </div>
          </div>
          <div className="conversation-item">
            <div 
            className="round-image"
            style= {
              {background: "url('/images/default-profile.jpg')"}
            }>
            </div>
            <div className="chat-bubble margin-left left">
              Are you there?
            </div>
          </div>
          <div className="conversation-item flex-right">
            <div className="chat-bubble margin-left right">
              Yes, I am here. Sorry for the late response. I was doing some errands. 
            </div>
          </div>
 
        </div>
        <div className="chat-centered-response horizontal-center">
          <i class="material-icons">
            attach_file
          </i>
          <textarea />
          <p className="uppercase">Send</p>
        </div>
      </div>
    </div>
  )
  }
}
