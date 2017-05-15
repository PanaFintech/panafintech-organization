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

import HeaderBanner from './components/HeaderBanner/HeaderBanner'

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

const Footer = () => (
  <Row>
    <Row>
      <Container>
        <Col>
          <p className='text-muted float-left align-middle' />
        </Col>
      </Container>
    </Row>
    <Row>
      <footer className='footer'>
        <Container>
          <Col>
            <p className='text-muted float-left align-middle'><h2>¡CONTÁCTANOS!</h2>
              <p>Si te interesa la innovación financiera, tienes un proyecto Fintech, o en general quieres conversar con nosotros, únete a nuestra comunidad de Slack o contáctanos a comunidad@panafintech.com</p></p>
          </Col>
          <Col>
            <p className='text-muted float-right align-middle'>Content © 2017 PanaFintech. TODOS LOS DERECHOS RESERVADOS | Theme by <a href='https://bootswatch.com/'>bootswatch</a></p>
          </Col>
        </Container>
      </footer>
    </Row>
  </Row>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Gapp = () => (
  <Container fluid>
    <Row>
      <HeaderBanner />
    </Row>
  </Container>
)

ReactDOM.render(
  <Gapp />,
    document.getElementById('gapp')
)
