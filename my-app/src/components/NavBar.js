import React from "react";
import fitnessLogo from "../styles/fitnessLogo.png";
import { LinksDiv, Links, Nav, Logo, H1 } from "../styles/StyledComponents";

function NavBar() {
  return (
    <Nav>
      <Logo>
        <Links to="/home">
          <img src={fitnessLogo} alt="logo" width="50%" />
        </Links>
      </Logo>
      <Links to="/">
        <H1> Anywhere Fitness</H1>
      </Links>
      <LinksDiv>
        <Links to="/login">Log In</Links>
        <Links to="/signup">Sign Up</Links>
      </LinksDiv>
    </Nav>
  );
}

export default NavBar;
