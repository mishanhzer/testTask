import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { useAnimalStore } from '../../store/store'

import { Spinner } from "../spinner/Spinner";
import { AppHeader } from "../appHeader/AppHeader";
import { NavigateMenu } from "../navigateMenu/NavigateMenu";

const Home = lazy(() => import('../pages/Home/Home.tsx'));
const Portfolio = lazy(() => import('../pages/Portfolio/Portfolio.tsx'));
const Animals = lazy(() => import('../pages/Portfolio/Animals/Animals.tsx'));
const Flowers = lazy(() => import('../pages/Portfolio/Flowers/Flowers.tsx'));
const ContactMeAnt = lazy(() => import('../pages/ContactMe/ContactMeAnt.tsx'));

import "./app.css";

const App = () => {
  const animalWorks = useAnimalStore(state => state.animalWorks)
  const animalDisplayedData = useAnimalStore(state => state.animalDisplayedData)
  const handleAnimalLoadMore = useAnimalStore(state => state.handleAnimalLoadMore)

  return (
    <Router>
      <div className={`w-full px-10`}>
        <AppHeader />
        <NavigateMenu />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/contact' element={<ContactMeAnt />} />
            <Route path='/home' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/portfolio/animals' element={<Animals animalWorks={animalWorks} animalDisplayedData={animalDisplayedData} handleAnimalLoadMore={handleAnimalLoadMore} />}>
              <Route path=':id' element={<Animals animalWorks={animalWorks} animalDisplayedData={animalDisplayedData} handleAnimalLoadMore={handleAnimalLoadMore} />} />
            </Route>
            <Route path='/portfolio/flowers' element={<Flowers />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
