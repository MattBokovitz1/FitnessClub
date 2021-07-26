import React, { useEffect, useContext } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import { ClassContext } from "../App";
import {
  ClassListStyle,
  ClasList,
  IndividualExercise,
  ExerciseImg,
  LeftDescription,
  ExerciseHeader,
  Paragraph,
} from "../styles/StyledComponents";
import SearchForm from "./SearchForm";
import NavBar from "./NavBar";

export default function ClassList() {
  const { clientClassList, setClientClassList, inputs } =
    useContext(ClassContext);

  const getClassList = () => {
    axiosWithAuth()
      .get("/api/auth/users/classes")
      .then((res) => {
        const x = res.data.data.filter((cls) => cls.user_id === inputs.user_id);
        console.log(res);
        setClientClassList(x);
      }, [])
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getClassList();
  }, []);

  return (
    <>
      <NavBar />
      <SearchForm
        clientClassList={clientClassList}
        setClientClassList={setClientClassList}
        getClassList={getClassList}
      />
      <ClasList>
        {/* <ClassListStyle className="classList"> */}
        <ClassListStyle>
          {clientClassList.map((cls) => {
            return (
              <IndividualExercise>
                <LeftDescription>
                  <ExerciseHeader> {cls.name}</ExerciseHeader>
                  {/* <Paragraph>Type of class: {cls.type}</Paragraph> */}
                  <Paragraph>Instructor: {cls.instructor_name}</Paragraph>
                  <Paragraph>Date: {cls.date}</Paragraph>
                  <Paragraph>Intensity: {cls.intensity}</Paragraph>
                  <Paragraph>Location: {cls.location}</Paragraph>
                  <Paragraph>Registered attendees: {cls.signedUp}</Paragraph>
                  <Paragraph>Maximum class size: {cls.max_size}</Paragraph>
                </LeftDescription>
                <ExerciseImg src={cls.img_url} alt="workout img" />
              </IndividualExercise>
            );
          })}
        </ClassListStyle>
      </ClasList>
    </>
  );
}
