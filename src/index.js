import ReactDOM from 'react-dom'
import React from 'react'
import Header from './components/Header/Header.js'
import HeaderBanner from './components/HeaderBanner/HeaderBanner'
import FullHouse from './components/FullHouse/FullHouse'
import Nuestros from './components/Nuestros/Nuestros'
import Footer from './components/Footer/Footer.js'

const Gapp = () => (
  <div>
    <Header />
    <HeaderBanner />
    <FullHouse />
    <Nuestros />
    <Footer />
  </div>
)

ReactDOM.render(
  <Gapp />,
    document.getElementById('gapp')
)
