import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Input, Header, Button } from "../styles/StyledComponents";

const initialFormValues = {
  name: "",
  instructor_name: "",
  type: "",
  intensity: "",
  location: "",
  date: "",
  max_size: "",
  duration: "",
  signedUp: false,
};

const AddClass = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const addClass = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/instructor/classes", formValues)
      .then(() => {
        history.push("/reload");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="class-form">
        <Header>Add Class</Header>
        <form onSubmit={handleSubmit(addClass)}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChanges}
          />
          <Input
            type="text"
            name="instructor_name"
            placeholder="Instructor Name"
            value={formValues.instructor_name}
            onChange={handleChanges}
          />
          <Input
            type="text"
            name="type"
            placeholder="Type"
            value={formValues.type}
            onChange={handleChanges}
          />
          <Input
            type="text"
            name="intensity"
            placeholder="Intensity"
            value={formValues.intensity}
            onChange={handleChanges}
          />
          <Input
            type="text"
            name="location"
            placeholder="Location"
            value={formValues.location}
            onChange={handleChanges}
          />
          <Input
            type="text"
            name="date"
            placeholder="Date"
            value={formValues.date}
            onChange={handleChanges}
          />
          <Input
            type="text"
            name="max_size"
            placeholder="Max Size"
            value={formValues.max_size}
            onChange={handleChanges}
          />
          <Input
            type="text"
            name="duration"
            placeholder="Duration"
            value={formValues.Duration}
            onChange={handleChanges}
          />
          <Input
            type="checkbox"
            name="signedUp"
            placeholder="Signed Up"
            value={formValues.signedUp}
            onChange={handleChanges}
          />
          <Button>Add Class</Button>
        </form>
      </div>
    </>
  );
};

export default AddClass;
