import React from 'react'

const Contact = () => (
  <div>
    <h1>Formulário de contato</h1>
    <form name="contact" method="POST" data-netlify="true">
    <p>
      <label>Nome: <input type="text" name="name" /></label>   
    </p>
    <p>
      <label>Email: <input type="email" name="email" /></label>
    </p>
    <p>
      <label>Mensagem: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type="submit">Enviar</button>
    </p>
  </form>
  </div>
)

export default Contact