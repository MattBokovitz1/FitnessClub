import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import * as yup from "yup";
import {
  Paragraph,
  Header,
  Button,
  Input,
  FormContainer,
  StyledDrop,
  StyledLabel,
} from "../styles/StyledComponents";

const initialFormValues = {
  name: "",
  email: "",
  username: "",
  password: "",
  role: "",
};

const initialFormErrors = {
  name: "",
  email: "",
  username: "",
  password: "",
  role: "",
};

export default function Form() {
  const [registers, setRegisters] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const postNewUser = (newUser) => {
    axiosWithAuth()
      .post(`/api/auth/register`, newUser)
      .then((res) => {
        setRegisters([res.data, ...registers]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const change = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submit = (evt) => {
    evt.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      role: formValues.role.trim(),
    };
    postNewUser(newUser);
  };

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Must include name.")
      .min(2, "First Name must be at least 2 characters long."),
    email: yup.string().required("Must include email."),
    username: yup.string().required("Must include username."),
    password: yup
      .string()
      .required("Password is required.")
      .min(4, "Passwords must be at least 4 characters long."),
    role: yup
      .string()
      .required("Must include role.")
      .min(2, "Role must be at least 2 characters long."),
  });

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  });

  return (
    <div>
      <form onSubmit={submit}>
        <FormContainer>
          <Header>Register Here!</Header>

          <Input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formValues.name}
            onChange={change}
          />
          <br />

          <Input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={formValues.email}
            onChange={change}
          />
          <br />

          <Input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formValues.username}
            onChange={change}
          />
          <br />

          <Input
            type="text"
            name="password"
            placeholder="Enter Password"
            value={formValues.password}
            onChange={change}
          />
          <br />

          <StyledLabel>
            Role:
            <StyledDrop onChange={change} value={formValues.role} name="role">
              <option value="">-Select a role-</option>
              <option value="client">Client</option>
              <option value="instructor">Instructor</option>
            </StyledDrop>
          </StyledLabel>

          {/* 
          <Input
            type="text"
            name="role"
            placeholder="Enter Role"
            value={formValues.role}
            onChange={change}
          />
          <br /> */}

          <div className="errors-container">
            <Paragraph>{formErrors.name}</Paragraph>
            <Paragraph>{formErrors.email}</Paragraph>
            <Paragraph>{formErrors.username}</Paragraph>
            <Paragraph>{formErrors.password}</Paragraph>
            <Paragraph>{formErrors.role}</Paragraph>
          </div>
          <br />

          <Button disabled={disabled}>Click to Sign Up</Button>

          <div className="register-container">
            {registers.map((register) => {
              if (!register) {
                return <h3>Working on Finding Your Account</h3>;
              }
              return (
                <div className="register-details">
                  <h2>Your Registration Was Successful!</h2>
                </div>
              );
            })}
          </div>
        </FormContainer>
      </form>
    </div>
  );
}
