import React from 'react'
import ReactDOM from 'react-dom'

import SubscribeForm from './SubscribeForm.js'
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.js'

export default class FullHouse extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
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
      if( document.getElementById('fullhouse-title').getBoundingClientRect().top < window.innerHeight ) {
        this.setState({isVisible: true});
      }
    }
  }

  componentDidMount () {
    if( !this.state.isVisible ) {
      if( document.getElementById('fullhouse-title').getBoundingClientRect().top < window.innerHeight ) {
        this.setState({isVisible: true});
      }
    }
  }

  render() {
    return (
      <ScrollWrapper onWindowScroll={() => this.handleScroll()}>
        <section id="section-fullhouse" className="pana-section">
          <div className={this.getClassName()}>

            <h2 id="fullhouse-title" className="sub-title">
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
      </ScrollWrapper>
    )
  }
}
