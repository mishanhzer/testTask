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
// import { Animals1 } from "../pages/Portfolio/Animals/Animals1";
// import { Animals2 } from "../pages/Portfolio/Animals/Animals2";
// import { Animals3 } from "../pages/Portfolio/Animals/Animals3";
// import { Animals4 } from "../pages/Portfolio/Animals/Animals4";
// import { Animals5 } from "../pages/Portfolio/Animals/Animals5";
import { Flowers } from "../pages/Portfolio/Flowers/Flowers";
import { NavigateMenu } from "../navigateMenu/NavigateMenu";

import "./app.scss";

const App = () => {
  const animalWorks = useAnimalStore(state => state.animalWorks)
  const animalDisplayedData = useAnimalStore(state => state.animalDisplayedData)
  const handleAnimalLoadMore = useAnimalStore(state => state.handleAnimalLoadMore)
  console.log(animalDisplayedData)
  // const animalDisplayedDataPageOne = useAnimalStore(state => state.animalDisplayedDataPageOne)
  // const animalDisplayedDataPageTwo = useAnimalStore(state => state.animalDisplayedDataPageTwo)
  // const animalDisplayedDataPageThree = useAnimalStore(state => state.animalDisplayedDataPageThree)
  // const animalDisplayedDataPageFour = useAnimalStore(state => state.animalDisplayedDataPageFour)
  // const animalDisplayedDataPageFive = useAnimalStore(state => state.animalDisplayedDataPageFive)
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
            <Route path=':id' element={<Animals animalWorks={animalWorks} animalDisplayedData={animalDisplayedData} handleAnimalLoadMore={handleAnimalLoadMore} />} />
          </Route>
          {/* <Route path='/portfolio/animals' element={<Animals animalWorks={animalWorks} animalDisplayedData={animalDisplayedData} handleAnimalLoadMore={handleAnimalLoadMore} />} /> */}
          {/* <Route path='/portfolio/animals/1' element={<Animals animalWorks={animalWorks} animalDisplayedData={animalDisplayedData} handleAnimalLoadMore={handleAnimalLoadMore} />} />
          <Route path='/portfolio/animals/2' element={<Animals1 animalWorks={animalWorks} animalDisplayedData={animalDisplayedDataPageOne} handleAnimalLoadMore={handleAnimalLoadMore} />} />
          <Route path='/portfolio/animals/3' element={<Animals2 animalWorks={animalWorks} animalDisplayedData={animalDisplayedDataPageTwo} handleAnimalLoadMore={handleAnimalLoadMore} />} />
          <Route path='/portfolio/animals/4' element={<Animals3 animalWorks={animalWorks} animalDisplayedData={animalDisplayedDataPageThree} handleAnimalLoadMore={handleAnimalLoadMore} />} />
          <Route path='/portfolio/animals/5' element={<Animals4 animalWorks={animalWorks} animalDisplayedData={animalDisplayedDataPageFour} handleAnimalLoadMore={handleAnimalLoadMore} />} />
          <Route path='/portfolio/animals/6' element={<Animals5 animalWorks={animalWorks} animalDisplayedData={animalDisplayedDataPageFive} handleAnimalLoadMore={handleAnimalLoadMore} />} /> */}
          <Route path='/portfolio/flowers' element={<Flowers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
