import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navbar.module.css';

export default function CustomNavbar() {
    return (
    <Navbar expand="lg" className={styles.bgColor}>
        <Container className="mw-100 px-3 mx-md-5 mx-3">
            <Navbar.Brand href="#home" className={`${styles.textColor} fw-bold`}>Collers</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#home" className={`${styles.textColor} px-4`}>Products</Nav.Link>
                    <Nav.Link href="#link" className={`${styles.textColor} px-4`}>Solutions</Nav.Link>
                    <Nav.Link href="#link" className={`${styles.textColor} px-4`}>Pricing</Nav.Link>
                    <Nav.Link href="#link" className={`${styles.textColor} px-4`}>Resources</Nav.Link>
                    <Nav.Link href="#link" className={`${styles.textColor} px-4`}>Log In</Nav.Link>
                    <Nav.Link href="#link" className={`${styles.textColor} ${styles.border} px-4`}>Sign up now</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}