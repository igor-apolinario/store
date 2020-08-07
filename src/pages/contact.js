import React from 'react'

const Contact = () => (
  <div>
    <h1>Formulário de contato</h1>
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
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