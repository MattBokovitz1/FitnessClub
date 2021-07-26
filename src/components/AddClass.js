import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { StyledDiv } from "../styles/StyledComponents";
import { Input, Button } from "antd";

const initialFormValues = {
  name: "",
  instructor_name: "",
  type: "",
  intensity: "",
  location: "",
  date: "",
  max_size: "",
  duration: 10,
  signedUp: false,
  img_url: "",
};

const AddClass = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const history = useHistory();

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const addClass = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/instructor/classes", formValues)
      .then(() => {
        console.log(formValues);
        history.push("/user");
        setFormValues(initialFormValues);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <StyledDiv>
        <form onSubmit={addClass}>
          <Input
            style={{ width: 300, margin: 5 }}
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChanges}
          />

          <Input
            style={{ width: 300, margin: 5 }}
            type="text"
            name="instructor_name"
            placeholder="Instructor Name"
            value={formValues.instructor_name}
            onChange={handleChanges}
          />

          <Input
            style={{ width: 300, margin: 5 }}
            type="text"
            name="type"
            placeholder="Type"
            value={formValues.type}
            onChange={handleChanges}
          />

          <Input
            style={{ width: 300, margin: 5 }}
            type="text"
            name="intensity"
            placeholder="Intensity"
            value={formValues.intensity}
            onChange={handleChanges}
          />

          <Input
            style={{ width: 300, margin: 5 }}
            type="text"
            name="date"
            placeholder="Date"
            value={formValues.date}
            onChange={handleChanges}
          />

          <Input
            style={{ width: 300, margin: 5 }}
            type="text"
            name="location"
            placeholder="Location"
            value={formValues.location}
            onChange={handleChanges}
          />

          <Input
            style={{ width: 300, margin: 5 }}
            type="text"
            name="max_size"
            placeholder="Max Size"
            value={formValues.max_size}
            onChange={handleChanges}
          />

          <Input
            style={{ width: 300, margin: 5 }}
            type="float"
            name="duration"
            placeholder="Duration"
            value={formValues.duration}
            onChange={handleChanges}
          />

          <Input
            style={{ width: 300, margin: 5 }}
            type="float"
            name="img_url"
            placeholder="Image URL"
            value={formValues.img_url}
            onChange={handleChanges}
          />
          <Input
            style={{ width: 300, margin: 5 }}
            type="Boolean"
            name=""
            placeholder="=Signed Up"
            value={formValues.signedUp}
            onChange={handleChanges}
          />

          <Button
            style={{ width: 200, margin: 10 }}
            type="primary"
            onClick={addClass}
          >
            Add Class
          </Button>
        </form>
      </StyledDiv>
    </>
  );
};

export default AddClass;
