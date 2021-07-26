import styled from "styled-components";
import { Link } from "react-router-dom";

export const ClasList = styled.div`
  background: #f8f8ff;
  margin: 0 auto;
`;

export const ClassListStyle = styled.div`
  font-size: 1rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: left;
  width: 85%;
  div {
    box-sizing: border-box;
    padding: 2%;
    margin: 1% 0;
    background: #36454f;
    color: white;
    border-radius: 10px;
  }
  h1 {
    font-size: 2.5rem;
    text-align: center;
    width: 100%;
    margin-top: 1%;
  }
  @media (max-width: 700px) {
    display: block;
    margin: 0 auto;
    width: 80%;
  }
`;

export const FormStyle = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: 3% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  select {
    border: 2px #e6b31e solid;
    border-radius: 10px;
  }
`;

// Nav

export const Nav = styled.nav`
  padding: 1% 0 3% 70%;
  background: #36454f;
  color: white;
  position: sticky;
`;

export const Links = styled(Link)`
  text-decoration: none;
  padding: 3% 0 0 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

// SignUp

export const Header = styled.h2`
  font-size: 3rem;
  margin-bottom: 8%;
  padding: 0% 0% 1% 0%;
  color: Black;
`;

export const ExerciseHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 8%;
  padding: 0% 0% 1% 0%;
  color: White;
`;

// Login

export const LoginBox = styled.div`
  background: white;
  padding: 5% 0;
  margin: auto 20%;
  border-radius: 3%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  margin: 15% 3% 3% 3%;
  @media (max-width: 500px) {
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  display: flex;
  padding: 3% 5%;
  border: 1px solid grey;
  border-radius: 3%;
  flex-direction: column;
  margin: 2% auto;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

//buttons

export const GButton = styled.button`
  display: inline-block;
  margin: 5% 0 0 0;
  padding: 3% 6%;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2%;
  font-size: 1.3rem;
  box-sizing: border-box;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  background: #36454f;
  font: inherit;
`;

export const SmallButton = styled.button`
  display: inline-block;
  margin: 1% 0;
  padding: 1% 1%;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2%;
  font-size: 1.3rem;
  box-sizing: border-box;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  background: #36454f;
  font: inherit;
  display: flex;
`;

export const OrangeButton = styled.button`
  display: inline-block;
  margin: 0 auto;
  padding: 3% 6%;
  align-content: center;
  align-items: center;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2%;
  font-size: 1.2rem;
  box-sizing: border-box;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  background: darkorange;
  font: inherit;
`;

export const SmallOrangeButton = styled.button`
  display: block;
  margin: auto;
  align-content: center;
  align-items: center;
  padding: 1% 2%;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2%;
  font-size: 1.2rem;
  box-sizing: border-box;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  background: darkorange;
  font: inherit;
`;

export const SmallEditButton = styled.button`
  display: inline-block;
  margin: 5% 3% 2.5% 3%;
  padding: 1% 2%;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2%;
  font-size: 1rem;
  box-sizing: border-box;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  background: darkorange;
  font: inherit;
`;

export const LoginPage = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 55%;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const FrontImage = styled.img`
  width: 100%;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const FormContainer = styled.div`
  width: 45%;
  background-color: #36454f;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Forms = styled.form`
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  padding: 10% 0 18% 0;
`;

export const Paragraph = styled.p`
  display: flex;
  font-size: 1rem;
  box-sizing: border-box;
  text-decoration: none;
  color: white;
  text-align: left;
`;

//Signup

export const SignUpTitle = styled.h2`
  color: white;
  font-size: 3rem;
  margin: 3% 3% 15% 3%;
  @media (max-width: 500px) {
  }
`;

// Update Page

export const SignUpContainer = styled.div`
  width: 100%;
  background-color: white;
  padding: 2% 0 5% 0;
`;

export const SignUpBox = styled.div`
  background: #36454f;
  padding: 3% 0;
  margin: 0% 25%;
  border-radius: 1%;
`;

export const EditTitle = styled.h2`
  color: white;
  font-size: 1.5rem;

  @media (max-width: 500px) {
  }
`;

export const EditInput = styled.input`
  font-size: 1rem;
  display: flex;
  padding: 0.5% 1%;
  color: grey;
  border: 1px solid grey;
  border-radius: 3%;
  flex-direction: column;
  margin: 0.5% auto;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const EditLabel = styled.label`
  display: block;
  font-size: 1rem;
  width: 90%;
  margin: 0 auto;
  color: white;
`;

export const UpdateDrop = styled.select`
  margin: 1%;
  width: 32%;
  padding: 0.5% 0;
  font-size: 1rem;
  align-content: center;
  font: inherit;
  color: grey;
`;

export const SignUpInput = styled.input`
  font-size: 1rem;
  display: flex;
  padding: 1% 1.6%;
  border: 1px solid grey;
  border-radius: 3%;
  flex-direction: column;
  margin: 0.5% auto;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const SearchInput = styled.input`
  font-size: 1rem;
  display: flex;
  padding: 1% 2%;
  margin: 0.5%;
  border: 1px solid black;
  border-radius: 3%;
  flex-direction: row;
  height: 20%;

  width: 20%;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

// Searchbar Styling
export const SearchDrop = styled.select`
  display: flex;
  border: 1px solid grey;
  border-radius: 2%;
  text-align: center;
  height: 6vh;
  font: inherit;
  color: gray;
  @media (max-width: 1050px) {
    height: auto;
  }
`;

export const SearchOption = styled.option`
  margin: 0.5%;
  font-size: 1rem;
  border: 1px solid black;

  text-align: center;
  font: inherit;
  color: black;
`;

export const StyledDrop = styled.select`
  width: 40%;
  padding: 1% 0;
  height: 30%;
  font-size: 0.5rem;
  align-content: center;
  font: inherit;
  color: grey;
`;

export const StyledOption = styled.option``;

export const StyledDiv = styled.div`
  display: block;
  border: lightgray;
  color: lightgray;
  font-size: 1rem;
  text-align: center;
`;

export const RegisterText = styled.h3`
  display: block;
  margin: 2% 0;
  text-align: center;
  margin: 0 auto;
  color: black;
  font-size: 1rem;
  font: inherit;
`;

export const IndividualExercise = styled.div`
  padding: 0 0 2% 0%;
  border-bottom: 1px black;

  width: 30%;
  @media (max-width: 1000px) {
  }
  @media (max-width: 700px) {
    margin: 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const LeftDescription = styled.div`
  justify-content: space-evenly;
  margin: 0 5% 0 0;
  font-family: inherit;
  font-size: 1.3rem;
  text-align: center;
  color: #101010;
  width: 100%;
  @media (max-width: 500px) {
    margin: 0;
    text-align: center;
  }
`;

export const ExerciseImg = styled.img`
  justify-content: space-evenly;
  align-content: center;
  margin: 0 auto;
  float: left;
  width: 100%;
  height: 250px;
  overflow: hidden;

  @media (max-width: 1000px) {
    padding: 5% 0;
    width: 100%;
    height: auto;
    overflow: none;
    float: none;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const IndividualExerciseInst = styled.div`
  display: flex;
  border-bottom: 1px black;
  margin: 5% 0 0 0;
  width: 70%;
  @media (max-width: 1000px) {
    display: block;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const LeftDescriptionInst = styled.div`
  justify-content: space-evenly;
  margin: 0 5% 0 0;
  font-family: inherit;
  font-size: 1.3rem;
  text-align: center;
  color: #101010;
  width: 100%;
  @media (max-width: 500px) {
    margin: 0;
    text-align: center;
  }
`;

export const ExerciseImgInst = styled.img`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  margin: 0 auto;
  float: left;
  width: 100%;
  height: 400px;
  overflow: hidden;

  @media (max-width: 1000px) {
    padding: 5% 0;
    width: 70%;
    height: auto;
    overflow: none;
    float: none;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const InstParagraph = styled.p`
  display: flex;
  padding: 1% 0 1% 0;
  font-size: 1rem;
  box-sizing: border-box;
  text-decoration: none;
  color: white;
  text-align: left;
`;
