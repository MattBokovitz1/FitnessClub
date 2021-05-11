import React from "react";
import { useHistory, Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { H3, Button, Paragraph } from "../styles/StyledComponents";

const ClassDetails = ({ clas }) => {
  const history = useHistory();

  const removeClass = (clas) => {
    axiosWithAuth()
      .delete(`/api/auth/instructor/classes/${clas.id}`)
      .then(() => {
        history.push("/reload");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="class-details">
      <H3>{clas.name}</H3>
      <Paragraph>{clas.location}</Paragraph>
      <Paragraph>{clas.instructor_name}</Paragraph>
      <Link to={`/api/auth/instructor/classes/${clas.id}`}>
        <Button>Edit</Button>
      </Link>
      <Button
        onClick={() => {
          removeClass(clas);
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default ClassDetails;
