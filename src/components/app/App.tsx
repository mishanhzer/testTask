import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import { AppHeader } from "../appHeader/AppHeader";
import { ContactMe } from "../pages/ContactMe/ContactMe";

import "./app.css";

const App = () => {
  return (
    <Router>
      <div className={`w-full px-10`}>
        <AppHeader />
        <Routes>
          <Route path="/" element="" />
          <Route path='/contact' element={<ContactMe />} />
        </Routes>
      </div>
    </Router>

    // <div className={`w-full px-10`}>
    //   <AppHeader />
    // </div>
  );
};

export default App;
