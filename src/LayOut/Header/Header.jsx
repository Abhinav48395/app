import React, { useState } from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import productData from '../../Product/product.json'
import { Link, useHistory } from 'react-router-dom'
import './header.css'



export const Header = () => {





    let history = useHistory()

    function Logout() {
        window.sessionStorage.clear()
        history.push("/login")
        alert("sucessfully logout")
    }

    return (

        <>
            <div >
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Ecom</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link className="element" as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className="element" as={Link} to="/regis">Sign Up</Nav.Link>
                            <Nav.Link className="element" as={Link} to="/login">login</Nav.Link>
                            <Nav.Link className="element" as={Link} to="/item_category">Item</Nav.Link>
                            <Nav.Link className="element" as={Link} to="/product_category">Product</Nav.Link>
                            <Nav.Link className="element" as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link className="element" as={Link} to="/feedback">FeedBack</Nav.Link>
                            <button className="log" onClick={Logout}>Logout</button>
                            <Nav.Link className="element" as={Link} to="/search">Search</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
