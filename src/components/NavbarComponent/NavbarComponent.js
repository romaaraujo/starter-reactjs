import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

class NavbarComponent extends Component {
    render() {
        return (
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://www.apaulista.org.br/wp-content/uploads/2021/02/youtube-logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-white' : 'text-secondary') + " nav-link text-secondary"}>
                            Home
                        </NavLink>
                        <NavLink to="/teste" className={({ isActive }) => (isActive ? 'text-white' : 'text-secondary') + " nav-link text-secondary"}>
                            Teste
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarComponent;