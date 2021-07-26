import React from "react";
import { Nav, Links } from "../styles/StyledComponents";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();

  const logout = () => {
    localStorage.clear("token");
    localStorage.clear("username");
    history.push("/");
  };
  return (
    <Nav>
      <Links onClick={logout}>Logout</Links>
    </Nav>
  );
}
