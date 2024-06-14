import React from "react";
import { Card, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
const MainMenu = () => {

    const {pathname} = useLocation();
    return (
        <Card>
            <Card.Body>
                <Nav  className="flex-column">
                    <Nav.Link to="/home" as={Link} disabled={pathname === "/"}>Home</Nav.Link>
                    <Nav.Link to="/hello-world" as={Link} disabled={pathname === "/hello-world"}>Hello World</Nav.Link>
                    <Nav.Link to="/hello-react" as={Link} disabled={pathname === "/hello-react"}>Hello React</Nav.Link>
                    <Nav.Link to="/jsx/1" as={Link} disabled={pathname === "/jsx/1"}>JSX1</Nav.Link>
                    <Nav.Link to="/jsx/2" as={Link} disabled={pathname === "/jsx/2"}>JSX2</Nav.Link>
                    <Nav.Link to="/style/1" as={Link} disabled={pathname === "/style/1"}>Style1</Nav.Link>
                    <Nav.Link to="/style/2" as={Link} disabled={pathname === "/style/2"}>Style2</Nav.Link>
                    <Nav.Link to="/style/3" as={Link}  disabled={pathname === "/style/3"}>Style3</Nav.Link>
                    <Nav.Link to="/clock1" as={Link} disabled={pathname === "/clock1"}>Clock1</Nav.Link>
                    <Nav.Link to="/customers" as={Link} disabled={pathname === "/customers"}>Customers</Nav.Link>
                    <Nav.Link to="/navigate" as={Link} disabled={pathname === "/navigate"}>Usenavigate</Nav.Link>
                    <Nav.Link to="/currency-converter" as={Link} disabled={pathname === "/currency-converter"}>Currency Converter</Nav.Link>
                </Nav>
            </Card.Body>
        </Card>
    );
};
export default MainMenu;