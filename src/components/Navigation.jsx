import { React } from "react";
import { Navbar } from "react-bootstrap";

import Logo from "../assets/Logo.png";

import "../styling/navigation.css";

const Navigation = () => {
  return (
    <div className="navbarContent">
      <Navbar className="navigation">
        <Navbar.Brand href="#home">
          {" "}
          <img className="logoStyling" src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="navItem">
            <a
              class="buttonStyling"
              target="_blank"
              href="https://github.com/sandipm02"
            >
              Github
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
