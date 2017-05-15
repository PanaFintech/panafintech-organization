import React from 'react'

import LogoImg from '../assets/logo-panafintech.png'

import './HeaderBanner.scss'

export const Header = () => (
  <div id="header-banner" className="banner-wrap">
    <div className="wsite-elements wsite-not-footer wsite-header-elements">
      <div className="wsite-section-wrap">
        <div className="wsite-section wsite-header-section wsite-section-bg-image wsite-section-effect-reveal">
          <div className="wsite-section-content">
            <div className="container">
              <div className="banner">
                <div className="wsite-section-elements">               
                  <div className="wsite-image wsite-image-border-none logo-img-div">
                    <a>
                      <img className="logo-img" src={LogoImg} alt="Picture" />
                    </a>
                  </div>

                  <h2 className="wsite-content-title" data-sr-id="3">
                    <font size="7">
                      <strong>PROMOVIENDO LA INNOVACIÓN FINANCIERA</strong>
                    </font>
                  </h2>

                  <div className="paragraph" data-sr-id="4">
                    <font size="4">Somos la comunidad de Fintech de Panamá.</font>
                  </div>

                  <div className="" data-sr-id="5">
                    <div className="wsite-multicol">
                      <div className="wsite-multicol-table-wrap">
                        <table className="wsite-multicol-table">
                          <tbody className="wsite-multicol-tbody">
                            <tr className="wsite-multicol-tr">
                              <td className="wsite-multicol-col td-asist">
                                <div className="text-left">
                                  <a
                                    className="wsite-button wsite-button-large wsite-button-highlight" href="http://www.panafintech.com/#evento">
                                    <span className="wsite-button-inner">
                                      <strong>¡asiste a nuestros eventos!</strong>
                                    </span>
                                  </a>
                                </div>
                              </td>

                              <td className="wsite-multicol-col td-comunidad">
                                <div className="text-left">
                                  <a
                                    className="wsite-button wsite-button-large wsite-button-normal"
                                    href="http://www.panafintech.com/#slack">
                                    <span className="wsite-button-inner">
                                      Comunidad slack
                                    </span>
                                  </a>
                                </div>
                              </td>

                              <td className="wsite-multicol-col td-space">
                                <div className="wsite-spacer"></div>
                              </td>

                              <td className="wsite-multicol-col td-objective">
                                <div className="text-left">
                                  <a className="wsite-button wsite-button-large wsite-button-normal" href="http://www.panafintech.com/#objetivos">
                                    <span className="wsite-button-inner">Objetivos</span>
                                  </a>
                                </div>
                              </td>

                              <td className="wsite-multicol-col td-socials">
                                <div>
                                  <span className="wsite-social wsite-social-default">
                                    <a className="first-child wsite-social-item wsite-social-facebook" href="https://www.facebook.com/panafintech/" target="_blank">
                                      <i className="wsite-social-item-inner fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a className="wsite-social-item wsite-social-twitter" href="https://twitter.com/panafintech" target="_blank">
                                      <i className="wsite-social-item-inner fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a className="wsite-social-item wsite-social-instagram" href="https://www.instagram.com/pana.fintech/" target="_blank">
                                      <i className="wsite-social-item-inner fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                    <a className="last-child wsite-social-item wsite-social-mail" href="mailto:comunidad@panafintech.com" target="_blank">
                                      <i className="wsite-social-item-inner fa fa-envelope-o" aria-hidden="true"></i>
                                    </a>
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
