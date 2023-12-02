// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link } from "react-router-dom";

// const Navbarwisata = () => {
//   return (
//     <Navbar className="Nav" expand="lg">
//       <Container>
//         <div className="d-flex justify-content-between w-100">
//           <Navbar.Brand style={{ color: "white" }} href="#home">
//             Tour Tech
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         </div>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto" activeKey="/home">
//             <Nav.Item>
//               <Nav.Link style={{ color: "white", marginRight: "50px" }}>
//                 <Link to="/home" className="text-white text-decoration-none">
//                   Beranda
//                 </Link>
//               </Nav.Link>
//             </Nav.Item>
//             <NavDropdown
//               id="nav-dropdown-dark-example"
//               title={<span style={{ color: "white" }}>Wisata</span>}
//               menuVariant="white"
//               style={{ marginRight: "50px" }}
//             >
//               <NavDropdown.Item>
//                 <Link to="/wisataA" className="text-decoration-none text-dark">
//                   Alam
//                 </Link>
//               </NavDropdown.Item>
//               <NavDropdown.Item>
//                 <Link to="/wisataS" className="text-decoration-none text-dark">
//                   Sejarah
//                 </Link>
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/wisata">
//                 <Link to="/wisata" className="text-decoration-none text-dark">
//                   Budaya
//                 </Link>
//               </NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown
//               id="nav-dropdown-dark-example"
//               title={<span style={{ color: "white" }}>Pemandu</span>}
//               menuVariant="white"
//               style={{ marginRight: "50px" }}
//             >
//               <NavDropdown.Item>
//                 <Link
//                   to="/datapemandu"
//                   className="text-decoration-none text-dark"
//                 >
//                   Data pemandu
//                 </Link>
//               </NavDropdown.Item>
//               <NavDropdown.Item>
//                 <Link
//                   to="/daftarpemandu"
//                   className="text-decoration-none text-dark"
//                 >
//                   Daftar
//                 </Link>
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Item>
//               <Nav.Link
//                 style={{
//                   color: "white",
//                   marginRight: "50px",
//                   textDecoration: "none",
//                 }}
//                 eventKey="/testimoni"
//               >
//                 Testimoni
//               </Nav.Link>
//             </Nav.Item>
//             <NavDropdown
//               id="nav-dropdown-dark-example"
//               title={<span style={{ color: "white" }}>User</span>}
//               menuVariant="white"
//             >
//               <NavDropdown.Item>
//                 <Link to="/akunsaya" className="text-decoration-none text-dark">
//                   Akun saya
//                 </Link>
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/login">
//                 <Link to="/" className="text-decoration-none text-dark">
//                   Logout
//                 </Link>
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Navbarwisata;

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Imguser from "/images/aldiuser.png";

const Navbarwisata = () => {
  const [navBackground, setNavBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const activeStyle = {
    backgroundColor: "gray",
    color: "blue",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <Navbar
      className={`Nav ${navBackground ? "bg-blue" : ""}`}
      expand="lg"
      fixed="top"
    >
      <Container>
        <div className="d-flex justify-content-between w-100">
          <Navbar.Brand style={{ color: "white" }} href="#">
            Tour Tech
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/home"
                style={{ color: "white", marginRight: "50px" }}
                activeStyle={activeStyle}
              >
                Beranda
              </Nav.Link>
            </Nav.Item>
            <NavDropdown
              id="wisata-dropdown"
              title="Wisata"
              menuVariant="white"
              style={{ marginRight: "50px" }}
            >
              <NavDropdown.Item as={Link} to="/wisataA">
                Alam
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wisataS">
                Sejarah
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wisata">
                Budaya
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="pemandu-dropdown"
              title="Pemandu"
              menuVariant="white"
              style={{ marginRight: "50px" }}
            >
              <NavDropdown.Item as={Link} to="/datapemandu">
                Data pemandu
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/daftarpemandu">
                Daftar
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/testimoni"
                style={{ color: "white", marginRight: "50px" }}
                activeStyle={activeStyle}
              >
                Testimoni
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/artikel"
                style={{ color: "white", marginRight: "50px" }}
                activeStyle={activeStyle}
              >
                Artikel
              </Nav.Link>
            </Nav.Item>
            <img
              src={Imguser}
              alt="Aldi"
              className="mt-2"
              style={{ height: "24px", width: "23px" }}
            />
            <NavDropdown id="user-dropdown" title="Aldi" menuVariant="white">
              <NavDropdown.Item as={Link} to="/akunsaya">
                Akun saya
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarwisata;
