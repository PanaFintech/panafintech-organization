import React from 'react'

import Icon from 'react-icons-kit'
import { facebook, twitter, instagram } from 'react-icons-kit/icomoon/'

export default class Footer extends React.Component {

  render() {
    return (
      <footer id="pana-footer" className="pana-section">
        <div className="container">

          <div className="footer-description">
            <h2 className="footer-title">
              ¡CONTÁCTANOS!
            </h2>
            <p className="description">
              Si te interesa la innovación financiera, tienes un proyecto Fintech, o en general quieres conversar con nosotros, únete a nuestra comunidad de Slack o contáctanos a comunidad@panafintech.com
            </p>
          </div>

          <div className="social-div">
            <div className="social-btn-div">
              <a className="pana-social-item pana-social-facebook" href="https://www.facebook.com/panafintech/" target="_blank">
                <Icon icon={facebook} size={20}/>
              </a>
              <a className="pana-social-item pana-social-twitter" href="https://twitter.com/panafintech" target="_blank">
                <Icon icon={twitter} size={20}/>
              </a>
              <a className="pana-social-item pana-social-instagram" href="https://www.instagram.com/pana.fintech/" target="_blank">
                <Icon icon={instagram} size={20}/>
              </a>
            </div>
            <p className="copyright">© COPYRIGHT 2017. TODOS LOS DERECHOS RESERVADOS</p>
          </div>

        </div>
      </footer>
    )
  }
}
