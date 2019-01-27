import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'

import ConversationItems from './ConversationItems'

export default class Chat extends Component {
  state = {
    conversations: [
      // {
      //   id: 1,
      //   senderId: 1,
      //   message: 'Hello!!! How are you'
      // },
      // {
      //   id: 2,
      //   senderId: 1,
      //   message: 'Are you there?'
      // },
      // {
      //   id: 3,
      //   senderId: 1,
      //   message: 'Hey.'
      // },
      // {
      //   id: 4,
      //   senderId: 0,
      //   message: 'Hi Sorry for the late reply. I was doing some errands'
      // },
    ],
    loggedInUser: {
      id: 0,
      name: 'Jam'
    },
    chatMessage: ''
  }

  componentDidMount() {
    const {conversations} = this.state

    if (conversations.length > 0) return;
    const socketData = this.props
    const { message } = socketData
    console.log(this.props, 'DATA')
    const newConversations = []
    const welcomeMessage = {
      id: uuidv4(),
      senderId: uuidv4(),
      message: message
    }

    newConversations.push(welcomeMessage)
    this.setState({
      conversations: newConversations
    })
  }

  changeChatValue = (e) => {
    this.setState({
      chatMessage: e.target.value
    })
  }

  onPressEnter = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.sendMessage()
    }
  }

  sendMessage = () => {
    const { loggedInUser, conversations, chatMessage } = this.state
    const newConversations = conversations
    const newMessage = {
      id: uuidv4(),
      senderId: loggedInUser.id,
      message: chatMessage
    }

    newConversations.push(newMessage)
    this.setState({
      conversations: newConversations,
      chatMessage: ''
    })
  }

  render() {
  const { conversations, loggedInUser, chatMessage } = this.state
  
  return (
    <div className="chat-centered horizontal-center">
      <div className="chat-centered-content">
        <div className="chat-centered-conversation">
          <ConversationItems conversations={conversations} loggedInUser={loggedInUser} />
        </div>
        <div className="chat-centered-response horizontal-center">
          <i className="material-icons">
            attach_file
          </i>
          <textarea 
            value={ chatMessage }
            onChange={ (e) => { this.changeChatValue(e) } }
            onKeyDown={(e) => this.onPressEnter(e)} /> 
          <button type="submit" onClick={ this.sendMessage } className="uppercase">Send</button>
        </div>
      </div>
    </div>
  )
  }
}
