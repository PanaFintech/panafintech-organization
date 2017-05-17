import React from 'react'
import SubscribeForm from './SubscribeForm.js'

export default class FullHouse extends React.Component {

  render() {
    return (
      <section id="section-fullhouse" className="pana-section">
        <div className="container">

          <h2 className="sub-title">
            FULL HOUSE!<br/><br/>
            ​Por motivos de espacio hemos cerrado la inscripción a nuestro evento.<br/><br/>
            ​¡Déjanos tus datos y te avisaremos de nuestra próxima reunión!
          </h2>

          <div className="fullhouse-content">

            <div className="subscribe-home">
              <SubscribeForm />
            </div>

            <div className="cardcontent-div">
              <img src="./images/panafintech-face-event2_orig.png"/>
            </div>

          </div>
        </div>
      </section>
    )
  }
}
