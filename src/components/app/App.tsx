import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// import { useAnimalStore, useFlowersStore } from '../../store/store'

import { Spinner } from "../spinner/Spinner";
import { AppHeader } from "../appHeader/AppHeader";
import { NavigateMenu } from "../navigateMenu/NavigateMenu";

const Home = lazy(() => import('../pages/Home/Home.tsx'));
const Portfolio = lazy(() => import('../pages/Portfolio/Portfolio.tsx'));
const Animals = lazy(() => import('../pages/Portfolio/Animals/Animals.tsx'));
const Flowers = lazy(() => import('../pages/Portfolio/Flowers/Flowers.tsx'));
const StillLife = lazy(() => import('../pages/Portfolio/StillLife/StillLife.tsx'));
const PeopleAndAnimals = lazy(() => import('../pages/Portfolio/PeopleAndAnimals/PeopleAndAnimals.tsx'));
const ContactMeAnt = lazy(() => import('../pages/ContactMe/ContactMeAnt.tsx'));

import "./app.css";

const App = () => {
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
            <Route path='/portfolio/animals' element={<Animals />}>
              <Route path=':id' element={<Animals />} />
            </Route>
            <Route path='/portfolio/flowers' element={<Flowers />}>
              <Route path=':id' element={<Flowers />} />
            </Route>
            <Route path='/portfolio/still_life' element={<StillLife />}>
              <Route path=':id' element={<StillLife />} />
            </Route>
            <Route path='/portfolio/people_and_animals/1' element={<PeopleAndAnimals />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
