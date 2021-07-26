import React, { useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { ClassContext } from "../App";
import Navbar from "./Navbar";
import {
  SignUpContainer,
  SignUpBox,
  EditTitle,
  EditInput,
  UpdateDrop,
  EditLabel,
  SmallEditButton,
} from "../styles/StyledComponents";

export default function UpdateClassForm() {
  const params = useParams();
  const history = useHistory();
  const { inputs, setInputs } = useContext(ClassContext);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/auth/users/classes/`)
      .then((res) => {
        let newArr = res.data.data.filter((cls) => cls.id == params.id);
        setInputs(newArr[0]);
      });
  }, []);

  const updateClass = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/auth/instructor/classes/${params.id}`, inputs)
      .then((res) => {
        console.log(res);
        history.push("/instructor");
      });
  };
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />
      <SignUpContainer>
        <SignUpBox>
          <EditTitle>Update class:</EditTitle>
          <form onSubmit={updateClass}>
            <EditLabel>
              Name of Class:
              <EditInput
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
              />
            </EditLabel>
            <EditLabel>
              Type:
              <EditInput
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
              />
            </EditLabel>

            <EditLabel>
              Date:
              <EditInput
                type="text"
                name="date"
                value={inputs.date}
                onChange={handleChange}
              />
            </EditLabel>

            <EditLabel>
              Duration:
              <EditInput
                type="text"
                name="duration"
                value={inputs.duration}
                onChange={handleChange}
              />
            </EditLabel>

            <EditLabel>
              Intensity:
              <br />
              <UpdateDrop name="intensity" onChange={handleChange}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </UpdateDrop>
            </EditLabel>

            <EditLabel>
              Location:
              <EditInput
                type="text"
                name="location"
                value={inputs.location}
                onChange={handleChange}
              />
            </EditLabel>

            <EditLabel>
              Registered attendees:
              <EditInput
                type="text"
                name="signedUp"
                value={inputs.signedUp}
                onChange={handleChange}
              />
            </EditLabel>

            <EditLabel>
              Maximum class size:
              <EditInput
                type="text"
                name="max_size"
                value={inputs.max_size}
                onChange={handleChange}
              />
            </EditLabel>

            <EditLabel>
              Image URL:
              <EditInput
                type="text"
                name="img_url"
                value={inputs.img_url}
                onChange={handleChange}
              />
            </EditLabel>

            <SmallEditButton>Update Class</SmallEditButton>
          </form>
        </SignUpBox>
      </SignUpContainer>
    </>
  );
}
