import React from 'react'

import Icon from 'react-icons-kit'
// import { facebook, twitter, instagram } from 'react-icons-kit/icomoon/'
import { components } from 'guld-type-social-accounts'
const data = require('../../../organization.json')
console.log(data)
const SocialAccounts = components.display

export default class Footer extends React.Component {
  render () {
    return (
      <footer id='pana-footer' className='pana-section'>
        <div className='container'>

          <div className='footer-description'>
            <h2 className='footer-title'>
              ¡CONTÁCTANOS!
            </h2>
            <p className='description'>
              Si te interesa la innovación financiera, tienes un proyecto Fintech, o en general quieres conversar con nosotros, únete a nuestra comunidad de Slack o contáctanos a comunidad@panafintech.com
            </p>
          </div>

          <div className='social-div'>
            <div className='social-btn-div'>

              <SocialAccounts.default socialAccounts={data.profiles} />
            </div>
            <p className='copyright'>© COPYRIGHT 2017. TODOS LOS DERECHOS RESERVADOS</p>
          </div>

        </div>
      </footer>
    )
  }
}
