import React from 'react'
import ReactDom from 'react-dom'

import SendEmailForm from './SendEmailForm.js'

export default class Comunidad extends React.Component {

  componentDidUpdate() {
    console.log( ReactDOM.findDOMNode(this).scrollTop );
  }

  render() {
    return (
      <section id="section-comunidad" className="pana-section">
        <div className="container">
          <h2 className="sub-title">
            COMUNIDAD SLACK
          </h2>
          <p className="description">
            Hemos creado una comunidad en Slack para difundir información relacionada con Fintech y conectar a los miembros de la comunidad.<br/><br/>
            Ingresa tu correo y te haremos llegar una invitación.
          </p>
          <div className="comunidad-content">
            <div className="sendmail-div">
              <SendEmailForm />
            </div>

            <div className="slack-img-div">
              <img src="./images/slack-cmyk_orig.png"/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
