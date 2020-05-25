import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUtensils } from '@fortawesome/free-solid-svg-icons'

import './Header.css'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar expand="md" className = "navbar">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem >
              <NavLink href="/"><FontAwesomeIcon icon = {faHome}/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/recipes/"><FontAwesomeIcon icon = {faUtensils}/> Burrito Recipes</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Header;
