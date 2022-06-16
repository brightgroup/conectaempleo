import React from 'react'
import { ChatWrapper, Conversations, Conversation } from '.'

export const Chat = ({ data }) => {
  return (
    <ChatWrapper className="d-flex">
      <Conversations data={data} />
      <Conversation />
    </ChatWrapper>
  )
}
