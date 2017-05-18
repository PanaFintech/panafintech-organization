import React from 'react'
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar id="pana-navbar" light toggleable>
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
      </div>
    );
  }
}
