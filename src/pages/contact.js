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
                <input className="app-form-control" placeholder="NOME" />
              </div>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="EMAIL" />
              </div>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="TELEFONE" />
              </div>
              <div className="app-form-group message">
                <input className="app-form-control" placeholder="MENSAGEM" />
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