import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user}=useContext(AuthContext);
    
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
         <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link to="/">Home</Link>
              </Nav.Link>
            <Nav.Link href="#pricing">
              About
              </Nav.Link>
            <Nav.Link href="#pricing">
              Career
              </Nav.Link>
          </Nav>
          <Nav>
            { user &&
              <Nav.Link href="#deets">
              <FaUserCircle style={{fontSize:'2.5rem'}}>
                </FaUserCircle>
                </Nav.Link>
            }
            <Nav.Link eventKey={2} href="#memes">
           {user ?
             <Button variant="secondary">Logout</Button>:
             <Link to="/login">
             <Button variant="secondary">Login</Button>
             </Link>
           }
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
 </Navbar>
        </Container>
    );
};

export default NavigationBar;