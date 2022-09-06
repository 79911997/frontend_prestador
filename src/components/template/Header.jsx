import {
  Container,
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Usuario from "../usuario/Usuario";
import Login from "../template/Login";


export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><i class="bi bi-tools"></i> Prestador</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          <i class="bi bi-person-fill"></i>
            <NavDropdown id="collasible-nav-dropdown">
              <NavDropdown.Item href="/template/Login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/template/Login">
                Novo Usuário
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default CollapsibleExample;
//     <Navbar bg="dark" variant="dark">
//     <Container fluid>
//       <Navbar.Brand href="#">
//           <i class="bi bi-tools"></i> Prestador
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="prestador" />
//         <Navbar.Collapse id="prestador">
//           <Nav
//             className="ms-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//            <i class="bi bi-person-fill"></i>
//             <NavDropdown id="navbarScrollingDropdown">
//               <NavDropdown.Item  as={Link} to="/Login">Cadastro Usuário</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item as={Link} to="/template/Login">Login</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#action1">
//               {" "}
              
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//  );
// }
