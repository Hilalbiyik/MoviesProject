import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

function NavbarComponent() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://user-images.githubusercontent.com/77548014/198883276-9f7c0e09-7d17-4b26-b986-36b58fb8559a.png"
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Ana Sayfa</Nav.Link>
            <Nav.Link href="/series">Diziler</Nav.Link>
            <Nav.Link href="/movies">Filmler</Nav.Link>
            <Nav.Link href="/trends">Popüler Başlıklar</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <div className="icons">
              <FaSearch className="icon" />
              <FaBell className="icon" />
            </div>
            <Button className="btn-lgn" size="lg">
              Oturum Aç
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
