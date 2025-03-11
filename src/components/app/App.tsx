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
import { Home } from "../pages/Home/Home";
import { NavigateMenu } from "../navigateMenu/NavigateMenu";

import "./app.scss";

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
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
