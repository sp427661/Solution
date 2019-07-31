import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "../../css/Navbar.css";

const AuthNavbar = () => {
  return (
    <div>
      <Navbar expand="md" className="navDiv">
        <NavbarBrand className="navbarBrand ml-5" href="/">
          Solution
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default AuthNavbar;
