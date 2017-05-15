import React from 'react'

import Icon from 'react-icons-kit'
import { facebook, twitter, mail2, github, instagram } from 'react-icons-kit/icomoon/'

export default class HeaderBanner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        // isLoaded: true
        isLoaded: false //test code
      })
    }, 500);
  }

  getClassName (className) {

    if (className == 'logo') {
      if(this.state.isLoaded) {
        return 'wsite-image wsite-image-border-none logo-img-div banner-show-anim';
      }
      else {
        return 'logo-div';
      }
    } else if( className == 'title') {
      if(this.state.isLoaded) {
        return 'wsite-content-title title-anim';
      }
      else {
        return 'header-title';
      }
    } else if(className == 'paragraph' ) {
      if(this.state.isLoaded) {
        return 'paragraph paragraph-anim';
      }
      else {
        return 'sub-title';
      }
    } else if(className == 'btndiv' ) {
      if(this.state.isLoaded) {
        return 'header-banner-btn-div anim';
      }
      else {
        return 'btn-div';
      }
    }
  }

  render() {
    return (
      <section id="header-banner" className="pana-section">
        <div className="container">

          <div className={this.getClassName('logo')}>
            <a>
              <img className="logo-img" src="./images/logo-panafintech.png" alt="Picture" />
            </a>
          </div>

          <h2 className={this.getClassName('title')}>
            PROMOVIENDO LA INNOVACIÓN FINANCIERA
          </h2>

          <p className={this.getClassName('paragraph')}>
            Somos la comunidad de Fintech de Panamá.
          </p>

          <div className={this.getClassName('btndiv')}>

            <div className="page-btn-div">
              <a className="btn-asist pana-btn pana-btn-primary"  href="http://www.panafintech.com/#evento">
                  ¡asiste a nuestros eventos!
              </a>

              <a className="btn-commun pana-btn" href="http://www.panafintech.com/#slack">
                  Comunidad slack
              </a>

              <a className="btn-object pana-btn" href="http://www.panafintech.com/#objetivos">
                Objetivos
              </a>
            </div>

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
              <a className="pana-social-item pana-social-mail" href="mailto:comunidad@panafintech.com" target="_blank">
                <Icon icon={mail2} size={20}/>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
