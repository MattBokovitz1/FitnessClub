import React, { useState, createContext } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import SignUpForm from "./components/SignupForm";

import LoginForm from "./components/LoginForm";
import ClientClassList from "./components/ClientClassList";
import InstructorClassList from "./components/InstructorClassList";
import PrivateRoute from "./utils/PrivateRoute";
import AddClassForm from "./components/AddClass";
import EditClassForm from "./components/EditClassForm";

export const initialValues = {
  name: "",
  instructor_name: localStorage.getItem("username"),
  type: "",
  date: "",
  duration: "",
  intensity: "low",
  location: "",
  signedUp: "",
  max_size: "",
};

export const ClassContext = createContext();
function App() {
  const [clientClassList, setClientClassList] = useState([]);
  const [inputs, setInputs] = useState(initialValues);

  return (
    <div>
      <Router>
        <ClassContext.Provider
          value={{ clientClassList, setClientClassList, inputs, setInputs }}
        >
          <div className="App">
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <PrivateRoute path="/Instructor" component={InstructorClassList} />
            <PrivateRoute path="/add-class" component={AddClassForm} />
            <PrivateRoute path="/update-class/:id" component={EditClassForm} />
            <PrivateRoute path="/User" component={ClientClassList} />
          </div>
        </ClassContext.Provider>
      </Router>
    </div>
  );
}

export default App;
