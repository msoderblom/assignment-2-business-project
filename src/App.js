import React from "react";
import { Switch, Route } from "react-router-dom";
import LayoutAdmin from "./components/LayoutAdmin";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StartPage from "./pages/StartPage";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <Switch>
        {/*    <LayoutAdmin> */}
        <Route path="/home" component={HomePage} />
        {/*       </LayoutAdmin> */}

        <Route path="/login" component={LoginPage} />

        <Route path="/register" component={RegisterPage} />
        <Route path="/" component={StartPage} />
      </Switch>
    </div>
  );
}
export default App;
/*
email: nackademin@willandskill.se
password: js-fend-19
*/
