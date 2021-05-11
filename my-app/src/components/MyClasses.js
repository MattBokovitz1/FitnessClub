import React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../utils/AppContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Header, Button } from "../styles/StyledComponents";
import ClassDetails from "./ClassDetails";

const MyClasses = () => {
  const [classList, setClassList] = useContext(AppContext);

  const fetchClasses = () => {
    axiosWithAuth()
      .get(`/api/auth/users/classes`)
      .then((res) => setClassList(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchClasses();
  });

  return (
    <>
      <div className="class-card">
        <Header>My Classes</Header>
        <Link to={"/add-class"}>
          <Button>New Classes</Button>
        </Link>
        {classList.map((clas) => {
          return <ClassDetails key={clas.id} clas={clas} />;
        })}
      </div>
    </>
  );
};

export default MyClasses;
