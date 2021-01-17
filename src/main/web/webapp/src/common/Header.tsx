import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">Pets Store</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto">
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/components">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/about">About</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
          <Nav>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/cart">Cart</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
