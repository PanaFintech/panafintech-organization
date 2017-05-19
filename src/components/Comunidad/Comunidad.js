import React from 'react'
import ReactDom from 'react-dom'

import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.js'
import SendEmailForm from './SendEmailForm.js'

export default class Comunidad extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };

  }

  componentDidUpdate() {
    if( !this.state.isVisible ) {
      if( document.getElementById('comunidad-title').getBoundingClientRect().top < window.innerHeight ) {
        this.setState({isVisible: true});
      }
    }
  }

  getClassName () {
    if( this.state.isVisible ) {
      return 'container pana-show-anim';
    }else {
      return 'container';
    }
  }

  handleScroll (event) {
    // console.log("ComponentA's handleScroll");
    if( !this.state.isVisible ) {
      if( document.getElementById('comunidad-title').getBoundingClientRect().top < window.innerHeight ) {
        this.setState({isVisible: true});
      }
    }
  }

  render() {
    return (
      <ScrollWrapper onWindowScroll={() => this.handleScroll()}>
        <section id="section-comunidad" className="pana-section">
          <div className={this.getClassName()}>
            <h2 id="comunidad-title" className="sub-title">
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
      </ScrollWrapper>
    )
  }
}
