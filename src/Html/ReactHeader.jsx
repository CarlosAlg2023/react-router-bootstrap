
import {
	Container,
	Nav,
	Navbar,
	NavDropdown
} from "react-bootstrap"

import REACT from "../Assets/Libs/react.png"
import REACTBOOTSTRAP from "../Assets/Libs/react-bootstrap.png"
import REACTROUTER from "../Assets/Libs/react-router-dom.png"

import "../Css/ImagesNav.css"

const ReactHeader = () => {
	return (
	<header style={{marginBottom: "80px"}}>
	 <nav>
		<Navbar expand="md" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href={`${process.env.REACT_APP_FRONTEND_URL}/`}>React-Router-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
            href="https://www.facebook.com/profile.php?id=100077277230596">Facebook
            <i className="bi bi-facebook ms-2"></i></Nav.Link>
            <Nav.Link
            href="https://wa.me/573024699165?text=Quiero%20información%20sobre%20este%20repositorio"
            target="_blank">Whatsapp <i className="bi bi-whatsapp
            ms-2"></i></Nav.Link>
            <NavDropdown title="Documentación" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://es.react.dev/">
              React <img className="rotating-image" src={REACT} width="25px" height="25px" alt="React" />
              </NavDropdown.Item>
              <NavDropdown.Item href="https://reactrouter.com/en/main">
              React-router-dom <img className="gir-image" src={REACTROUTER} width="35px" height="25px" alt="React" />
              </NavDropdown.Item>
              <NavDropdown.Item href="https://react-bootstrap.netlify.app/">
              React-bootstrap <img className="rotating-image" src={REACTBOOTSTRAP} width="25px" height="25px"
              alt="React-bootstrap" />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </nav>
  </header>
	);
}

export default ReactHeader;

