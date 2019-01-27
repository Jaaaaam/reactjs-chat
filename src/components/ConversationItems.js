import React from 'react'
import uuidv4 from 'uuid/v4'

const renderReceivedMessage = (message) => {
  return (
    <div key={ uuidv4() } className="conversation-item">
      <div 
      className="round-image"
      style= {
        {background: "url('/images/default-profile.jpg')"}
      }>
      </div>
      <div className="chat-bubble margin-left">
        { message }
      </div>
    </div>
  )
}

const renderSentMessage = (message) => {
  return (
    <div key={ uuidv4() } className="conversation-item flex-right">
      <div className="chat-bubble margin-left right">
        { message } 
      </div>
    </div>
  )
}

const renderConversationItems = (loggedInUser, conversations) => {
  return conversations.map((conversation) => {
    return conversation.senderId === loggedInUser.id ? renderSentMessage(conversation.message) : renderReceivedMessage(conversation.message)
  })
}

function ConversationItems(props) {
  const { loggedInUser, conversations } = props
  console.log(props, 'CONVERSATOIN')
  return (
    renderConversationItems(loggedInUser, conversations)
  )
}

export default ConversationItems;
