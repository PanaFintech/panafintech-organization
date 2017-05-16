'use strict'
import ReactDOM from 'react-dom'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Alert, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Jumbotron } from 'reactstrap'
import Icon from 'react-icons-kit'
import { facebook, twitter, mail2, github } from 'react-icons-kit/icomoon/'

import Header from './components/Header/Header.js'
import HeaderBanner from './components/HeaderBanner/HeaderBanner'
import Nuestros from './components/Nuestros/Nuestros'
import Footer from './components/Footer/Footer.js'

const Jumbo = () => (
  <Jumbotron fluid>
    <Container fluid>
      <h1 className='display-3'>Fluid jumbotronasdf</h1>
      <p className='lead'>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </Container>
  </Jumbotron>
)

const Content = () => (
  <Col>
    <Jumbo />
  </Col>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Gapp = () => (
  <div>
    <Header />
    <HeaderBanner />
    <Nuestros />
    <Footer />
  </div>
)

ReactDOM.render(
  <Gapp />,
    document.getElementById('gapp')
)
