import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import workout from "../assets/workout.png";
import { useHistory } from "react-router-dom";
import { ClassContext } from "../App";
import SignupForm from "./SignupForm";
import { Button, Modal, Input } from "antd";

import {
  FrontImage,
  Title,
  OrangeButton,
  Forms,
  FormContainer,
  LeftContainer,
  LoginPage,
  LoginBox,
} from "../styles/StyledComponents";

const LoginForm = () => {
  const initialFormValues = {
    username: "",
    password: "",
  };

  // STATE:
  //post
  const [post, setPost] = useState();
  //form
  const [formValues, setFormValues] = useState(initialFormValues);
  //button
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { inputs, setInputs } = useContext(ClassContext);
  const [visState, setVisState] = useState("hidden");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    history.push("/");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //INPUT CHANGE
  const data = [];
  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formValues,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    setFormValues(newFormData);
  };

  const history = useHistory();

  //SUBMIT
  const formSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", formValues.username);
    setInputs({ ...inputs, instructor_name: localStorage.getItem("username") });
    axios
      .post("https://fitness-club-be.herokuapp.com/api/auth/login", formValues)
      .then((res) => {
        console.log(res);
        setPost(res.data);
        data.push(post);
        setFormValues(initialFormValues);
        localStorage.setItem("token", res.data.token);
        history.push(`/${res.data.role}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Disable button if invalid inputs

  useEffect(() => {
    if (formValues.username.length >= 3 && formValues.password.length > 3) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formValues]);

  return (
    <div>
      <LoginPage>
        <LeftContainer>
          <FrontImage src={workout} />
        </LeftContainer>
        <FormContainer>
          <Title>Fitness Club</Title>

          <Forms onSubmit={formSubmit}>
            <LoginBox>
              <Input
                style={{ margin: 10, width: 200 }}
                type="username"
                name="username"
                placeholder="username"
                value={formValues.username}
                onChange={inputChange}
                data-cy="username"
              />

              <br />
              <Input
                style={{ margin: 10, width: 200 }}
                type="password"
                name="password"
                placeholder="password"
                value={formValues.password}
                onChange={inputChange}
                data-cy="password"
              />

              <div className="button">
                <OrangeButton
                  style={{ margin: 20 }}
                  type="submit"
                  disabled={buttonDisabled}
                  color="warning"
                  data-cy="submit"
                  onClick={() => {
                    setVisState(visState);
                  }}
                >
                  Login
                </OrangeButton>
              </div>
            </LoginBox>
            <>
              <Button style={{ margin: 30 }} onClick={showModal}>
                Create New Account
              </Button>

              <Modal
                title="Register Here"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[null]}
              >
                <SignupForm />
              </Modal>
            </>
          </Forms>
        </FormContainer>
      </LoginPage>
    </div>
  );
};

export default LoginForm;
