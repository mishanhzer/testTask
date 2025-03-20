import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { useAnimalStore } from '../../store/store'

import { AppHeader } from "../appHeader/AppHeader";
import { ContactMeAnt } from "../pages/ContactMe/ContactMeAnt";
import { Home } from "../pages/Home/Home";
import { Portfolio } from "../pages/Portfolio/Portfolio";
import { Animals } from "../pages/Portfolio/Animals/Animals";
import { Flowers } from "../pages/Portfolio/Flowers/Flowers";
import { NavigateMenu } from "../navigateMenu/NavigateMenu";

import "./app.scss";

const App = () => {
  const animalWorks = useAnimalStore(state => state.animalWorks)
  const animalDisplayedData = useAnimalStore(state => state.animalDisplayedData)
  const handleAnimalLoadMore = useAnimalStore(state => state.handleAnimalLoadMore)

  const animalDisplayedDataPageOne = useAnimalStore(state => state.animalDisplayedDataPageOne)
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
          <Route path='/portfolio/animals' element={<Animals animalWorks={animalWorks} animalDisplayedData={animalDisplayedData} handleAnimalLoadMore={handleAnimalLoadMore} />}>
            <Route path=':id' element={<Animals animalWorks={animalWorks} animalDisplayedData={animalDisplayedDataPageOne} handleAnimalLoadMore={handleAnimalLoadMore} />} />
          </Route>
          {/* <Route path='/portfolio/animals' element={<Animals animalWorks={animalWorks} animalDisplayedData={animalDisplayedData} handleAnimalLoadMore={handleAnimalLoadMore} />} /> */}
          {/* <Route path='/portfolio/animals/1' element={<Animals animalWorks={animalWorks} animalDisplayedData={animalDisplayedDataPageOne} handleAnimalLoadMore={handleAnimalLoadMore} />} /> */}
          <Route path='/portfolio/flowers' element={<Flowers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
