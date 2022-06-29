import { Button,img } from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import logo from './aarfidLogo.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
function Header() {

    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="headerLayout" style={{
       backgroundColor: '#FFFFFF',padding:'20px', position:'sticky',top:'0'
    }}>
        <Navbar color="white" light expand="md">
            <NavbarBrand href="/"> <img src={logo} alt="Logo" /></NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/my-account">Account Details</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/order-history">Order History</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/place-order">Place Order</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div >
  );
}

export default Header;
