import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import {
  ExerciseImgInst,
  IndividualExerciseInst,
  LeftDescriptionInst,
  ExerciseHeader,
  InstParagraph,
} from "../styles/StyledComponents";
import { Button } from "antd";
export default function ClassCard({
  cls,
  setInstructorClasses,
  instructorClasses,
}) {
  const history = useHistory();

  const deleteClass = (e) => {
    e.preventDefault();
    console.log(cls.id);
    axiosWithAuth()
      .delete(`/api/auth/instructor/classes/${cls.id}`)
      .then((res) => {
        console.log("Deleted", res);
        const list = instructorClasses.filter((el) => el.id !== cls.id);
        setInstructorClasses(list);
      });
  };
  return (
    <IndividualExerciseInst>
      <LeftDescriptionInst>
        <ExerciseHeader>{cls.name}</ExerciseHeader>
        <InstParagraph>Type of class: {cls.type}</InstParagraph>
        <InstParagraph>Intensity: {cls.intensity}</InstParagraph>
        <InstParagraph>Instructor: {cls.instructor_name}</InstParagraph>
        <InstParagraph>Date: {cls.date}</InstParagraph>
        <InstParagraph>Duration: {cls.duration}</InstParagraph>
        <InstParagraph>Location: {cls.location}</InstParagraph>
        <InstParagraph>Registered attendees: {cls.signedUp}</InstParagraph>
        <InstParagraph>Maximum class size: {cls.max_size}</InstParagraph>
        <Button
          style={{ margin: 10 }}
          onClick={() => history.push(`/update-class/${cls.id}`)}
        >
          Edit Class
        </Button>

        <Button onClick={deleteClass}>Delete Class</Button>
      </LeftDescriptionInst>

      <ExerciseImgInst src={cls.img_url} alt="workout-img" />
    </IndividualExerciseInst>
  );
}
