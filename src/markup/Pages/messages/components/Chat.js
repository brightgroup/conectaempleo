import React from 'react'
import { ChatWrapper, Conversations, Conversation } from '.'

export const Chat = ({ data }) => {
  return (
    <ChatWrapper className="d-flex flex-column flex-md-row">
      <Conversations data={data} />
      <Conversation />
    </ChatWrapper>
  )
}
