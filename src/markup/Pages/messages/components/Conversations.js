import React from 'react'
import user from 'images/default-profile.jpg'

export const Conversations = () => {
  return (
    <aside className="chat__conversations">
      {[1, 8, 0, 3].map(item => (
        <section
          className={`d-flex justify-content-between py-2 px-2 align-items-center ${
            !item ? 'chat__active-conversation' : ''
          }`}
          key={item}
        >
          <img alt="contact" className="chat__contact-image" src={user} />
          <p className="bold text-sm">Andrés Sánchez</p>
        </section>
      ))}
    </aside>
  )
}
