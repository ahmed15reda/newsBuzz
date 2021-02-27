import * as React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from '../../styles/Home.module.css'


const Header = () => {
  return (
    <Navbar className={styles.header}  sticky="top" bg="light" expand="lg">
        <Navbar.Brand className={styles.brand} href="#home">Newsbuzz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={styles.basic} id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className={styles.login} href="#">LOGIN</Nav.Link>
              <Nav.Link className={styles.register} href="#">REGISTER</Nav.Link>
            </Nav>
        </Navbar.Collapse>
</Navbar>
  )
}
export default Header