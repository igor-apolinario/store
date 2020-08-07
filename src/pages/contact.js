import React from 'react'

import '../styles/contact.scss'

const Contact = () => (
  <div className="background">
    <div className="container">
      <div className="screen">
        <div className="screen-header">
          <div className="screen-header-left">
            <div className="screen-header-button close"></div>
            <div className="screen-header-button maximize"></div>
            <div className="screen-header-button minimize"></div>
          </div>

          <div className="screen-header-right">
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
          </div>
        </div>

        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>CONTATO</span>
            </div>
            <div className="app-contact">CONTATE-NOS : (11) 9XXXX-XXXX</div>
          </div>
          <div className="screen-body-item">
            <form name="contact" method="POST"  className="app-form" data-netlify="true">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="app-form-group">
                <input name="name" className="app-form-control" placeholder="NOME" required />
              </div>
              <div className="app-form-group">
                <input name="email" className="app-form-control" placeholder="EMAIL" required />
              </div>
              <div className="app-form-group">
                <input name="phone" className="app-form-control" placeholder="TELEFONE" />
              </div>
              <div className="app-form-group message">
                <input name="message" className="app-form-control" placeholder="MENSAGEM" required />
              </div>
              <div className="app-form-group buttons">
                <button type="submit" className="app-form-button">ENVIAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contact