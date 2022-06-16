import React from 'react'
import user from 'images/default-profile.jpg'

export const Conversation = () => {
  return (
    <section className="chat__conversation d-flex flex-column">
      <div className="chat__messages flex-1 d-flex p-2 flex-column">
        {[1, 2, 3, 4].map(item => (item % 2 ? <IncomingMessage key={item} /> : <OutgoingMessage key={item} />))}
      </div>
      <div className="chat__input-container">
        <textarea className="chat__input w-100 h-100" />
        <div className="chat__send-button center pointer">
          <i className="fa-solid fa-paper-plane text-white" />
        </div>
      </div>
    </section>
  )
}

export const IncomingMessage = () => (
  <div className="d-flex p-2 gap-2 relative">
    <img alt="contact" className="chat__conversation-image" src={user} />
    <div className="chat__message p-2 chat__incoming-message">
      <p>Entrante</p>
    </div>
    <p className="chat__hour chat__hour-incoming">
      <i className="fa-solid fa-clock" />
      Hace 17 horas
    </p>
  </div>
)

export const OutgoingMessage = () => (
  <div className="d-flex p-2 gap-2 relative">
    <div className="chat__message p-2">
      <p>Saliente</p>
    </div>
    <img alt="contact" className="chat__conversation-image" src={user} />
    <p className="chat__hour">
      <i className="fa-solid fa-clock" />
      Hace 18 horas
    </p>
  </div>
)
