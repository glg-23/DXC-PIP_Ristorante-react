import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logoRistorante-bianco.png';

function Header() {
    return (
        <div >
            <Navbar className='sfondoNav'>
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />
                        <i className='titoloNav'>Ristorante</i>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
