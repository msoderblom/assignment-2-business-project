import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
/* import LayoutAdmin from "./components/LayoutAdmin"; */
import { CustomerListContext } from "./contexts/CustomerListContext";
import { UserContext } from "./contexts/UserContext";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StartPage from "./pages/StartPage";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const [customerList, setCustomerList] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <CustomerListContext.Provider value={{ customerList, setCustomerList }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Switch>
            <Route path="/customer/:id" component={CustomerDetailPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/" component={StartPage} />
          </Switch>
        </UserContext.Provider>
      </CustomerListContext.Provider>
    </div>
  );
}
export default App;
/*
email: nackademin@willandskill.se
password: js-fend-19
*/
