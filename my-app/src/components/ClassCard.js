import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import {
  ExerciseImgInst,
  IndividualExerciseInst,
  LeftDescriptionInst,
  ExerciseHeader,
  Paragraph,
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
        <Paragraph>Type of class: {cls.type}</Paragraph>
        <Paragraph>Intensity: {cls.intensity}</Paragraph>
        <Paragraph>Instructor: {cls.instructor_name}</Paragraph>
        <Paragraph>Date: {cls.date}</Paragraph>
        <Paragraph>Duration: {cls.duration}</Paragraph>
        <Paragraph>Location: {cls.location}</Paragraph>
        <Paragraph>Registered attendees: {cls.signedUp}</Paragraph>
        <Paragraph>Maximum class size: {cls.max_size}</Paragraph>
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
