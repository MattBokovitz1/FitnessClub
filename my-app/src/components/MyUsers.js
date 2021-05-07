import React from "react";
// import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// import { AppContext } from "../utils/AppContext";
// import axiosWithAuth from "../utils/axiosWithAuth";
import { Header, Button } from "../styles/StyledComponents";

const MyUsers = () => {
  //   const [userList, setUserList] = useContext(AppContext);

  //   const fetchUsers = () => {
  //     axiosWithAuth()
  //       .get(`/api/users`)
  //       .then((res) => setUserList(res.data))
  //       .catch((err) => console.log(err));
  //   };

  //   useEffect(() => {
  //     fetchUsers();
  //   });

  return (
    <>
      <div className="user-card">
        <Header>My Users</Header>
        <Link to={"/add-user"}>
          <Button>New User</Button>
        </Link>
      </div>
    </>
  );
};

export default MyUsers;
