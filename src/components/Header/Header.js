import React from 'react'
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap'

import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.js'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

    this.state = {
      isVisible: false
    };

  }

  componentDidMount() {
    if( window.pageYOffset > 50 ) {
      this.setState({isVisible: true});
    } else {
      this.setState({isVisible: false});
    }
  }

  getClassName () {
    if( this.state.isVisible ) {
      return 'shrink';
    }else {
      return '';
    }
  }

  handleScroll (event) {
    // console.log("ComponentA's handleScroll");
    if( window.pageYOffset > 50 ) {
      this.setState({isVisible: true});
    } else {
      this.setState({isVisible: false});
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <ScrollWrapper onWindowScroll={() => this.handleScroll()}>
        <Navbar id="pana-navbar" light toggleable className={this.getClassName()}>
          <Nav>
            <NavbarToggler right onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-item-panafintech" href="">PANAFINTECH</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Nav>
        </Navbar>
      </ScrollWrapper>
    );
  }
}
