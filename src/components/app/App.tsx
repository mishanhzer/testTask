import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { AppHeader } from "../appHeader/AppHeader";
import { ContactMeAnt } from "../pages/ContactMe/ContactMeAnt";
import { Home } from "../pages/Home/Home";
import { Portfolio } from "../pages/Portfolio/Portfolio";
import { Animals } from "../pages/Portfolio/Animals/Animals";
import { Flowers } from "../pages/Portfolio/Flowers/Flowers";
import { NavigateMenu } from "../navigateMenu/NavigateMenu";

import "./app.scss";

const App = () => {
  return (
    <Router>
      <div className={`w-full px-10`}>
        <AppHeader />
        <NavigateMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<ContactMeAnt />} />
          <Route path='/home' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/animals' element={<Animals />} />
          <Route path='/portfolio/flowers' element={<Flowers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
