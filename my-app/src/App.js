import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import MyClasses from "./components/MyClasses";
import PrivateRoute from "./utils/PrivateRoute";
import { AppProvider } from "./utils/AppContext";
import AddClass from "./components/AddClass";

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={LoginForm} />
          <Redirect exact from="/reload" to="/" />
          <PrivateRoute exact path="/home" component={MyClasses} />
          <PrivateRoute exact path="/add-class" component={AddClass} />
        </Switch>
      </div>
    </AppProvider>
  );
};

export default App;
