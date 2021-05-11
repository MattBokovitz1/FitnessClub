import styled from "styled-components";
import { Link } from "react-router-dom";

// Nav

export const Links = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #8db596;
  text-decoration: none;
`;

export const LinksDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 15%;
  font-size: 1rem;
  color: black;
  text-decoration: none;

  @media (max-width: 500px) {
    width: 50%;
  }
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 15%;
`;

// SignUp

export const FormContainer = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Header = styled.h2`
  font-size: 3rem;
  margin-bottom: 8%;
  padding: 0% 0% 1% 0%;
  color: #92817a;
`;

export const Input = styled.input`
  font-size: 1rem;
  margin: 0.5% 0% 0.5% 0%;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

// Login

export const Button = styled.button`
  font-size: 1rem;
  margin: 0.5% 0% 5% 0%;
`;

export const Quote = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const H3 = styled.h3`
  font-size: 2rem;
  color: white;
`;

export const StyledDrop = styled.select`
  margin: 1%;
  border: none;
  border-radius: 20px;
  width: 15%;
  height: 2.2vh;
`;

export const StyledLabel = styled.label`
  margin: -2%;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: white;
  padding: 0% 1% 0 0.5%;
`;

export const Background = styled.div`
  background: url(https://cdn.britannica.com/42/91642-050-332E5C66/Keukenhof-Gardens-Lisse-Netherlands.jpg);
`;
