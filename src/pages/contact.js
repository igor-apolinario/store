import React from 'react'

const Contact = () => (
  <div>
    <h1>Formulário de contato</h1>
    <form
      name="contact-form"
      method="post"
      netlify
    >
      <input name="name" placeholder="Your Name" type="text" />
      <input name="email" placeholder="name@name.com" type="email" />
      <textarea name="message" />
      <button>Enviar</button>
    </form>
  </div>
)

export default Contact