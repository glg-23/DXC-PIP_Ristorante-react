import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../logoRistorante-bianco.png';

class Header extends React.Component {

    render() {
        return (
            <div>
                <Navbar className='sfondoNav' variant="dark">
                    <Container>
                        <Navbar.Brand href="/home">
                            <img
                                src={logo}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                            />
                            <i className='titoloNav'>Ristorante</i>
                        </Navbar.Brand>

                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/menu">Menù</Nav.Link>
                            <Nav.Link href="/informazioni">Informazioni</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}


export default Header;
