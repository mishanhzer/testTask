import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import { AppHeader } from "../appHeader/AppHeader";
import { ContactMeRhf } from "../pages/ContactMe/ContactMeRhf";
import { ContactMeAnt } from "../pages/ContactMe/ContactMeAnt";
import { NavigateMenu } from "../navigateMenu/NavigateMenu";

import "./app.css";

const App = () => {
  return (
    <Router>
      <div className={`w-full px-10`}>
        <AppHeader />
        <NavigateMenu />
        <Routes>
          <Route path="/" element="" />
          {/* <Route path='/contact' element={<ContactMeRhf />} /> */}
          <Route path='/contact' element={<ContactMeAnt />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
