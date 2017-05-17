import React from 'react'

export default class Nuestros extends React.Component {
  render () {
    return (
      <section id='section-nuestros'>
        <div className='container'>
          <h2 className='sub-title'>
            NUESTROS OBJETIVOS
          </h2>
          <div className='nuestros-content'>
            <div className='nuestros-content-item'>
              <img className='img-ecosystem' src='./images/ecosystem_1.png' />
              <p className='content-title'>
                Dinamización del ecosistema
              </p>
              <p className='description'>
                Realizamos eventos regulares para promover la dinamización del ecosistema Fintech en Panamá y la comunicación con ecosistemas en el extranjero.
              </p>
            </div>

            <div className='nuestros-content-item'>
              <img className='img-info' src='./images/info_1.png' />
              <p className='content-title'>
                Educación y promoción
              </p>
              <p className='description'>
                A través de nuestra comunidad, promovemos y educamos sobre las oportunidades que  innovación financiera y las empresas Fintech representan.
              </p>
            </div>

            <div className='nuestros-content-item'>
              <img className='img-law' src='./images/law_1.png' />
              <p className='content-title'>
                Propuestas regulatorias
              </p>
              <p className='description'>
                Colaboramos con las autoridades gubernamentales relevantes para proponer y  apoyar ajustes regulatorios que permitan el crecimiento del ecosistema Fintech en Panamá.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
