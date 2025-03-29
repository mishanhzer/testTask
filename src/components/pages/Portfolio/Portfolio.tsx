import React, { Fragment } from "react";

import { Title } from "../../UI_kits/LinkAndButton.tsx";
import { PortfolioItem } from "./PortfolioItem.tsx";

import { useAnimalStore, useFlowersStore, useStillLifeStore } from '../../../store/store.ts'

import { PortfolioAnimals, PortfolioFlowers, PortfolioStillLife, PortfolioPeopleAndAnimals } from "../../../assets/images/Images";
import { descriptionAnimals, descriptionFlowers, descriptionStillLife } from './descriptionGroupsPicture.ts'

const Portfolio = () => {
  const paramsId = useAnimalStore(state => state.paramsId)
  const paramdFlowersId = useFlowersStore(state => state.paramsFlowersId)
  const paramsStillLifeId = useStillLifeStore(state => state.paramsStillLifeId)

  const dataPortfolioItem = [
    { Component: <PortfolioAnimals />, headText: 'Animals', text: descriptionAnimals, path: `/portfolio/animals/${paramsId}`, id: 0 },
    { Component: <PortfolioFlowers />, headText: 'Flowers', text: descriptionFlowers, path: `/portfolio/flowers/${paramdFlowersId}`, id: 1 },
    { Component: <PortfolioStillLife />, headText: 'StillLife', text: descriptionStillLife, path: `/portfolio/still_life/${paramsStillLifeId}`, id: 2 },
    { Component: <PortfolioPeopleAndAnimals />, headText: 'PeopleAndAnimals', text: descriptionStillLife, path: `/portfolio/people_and_animals/1`, id: 2 }
  ]

  return (
    dataPortfolioItem.map(item => {
      return (
        <Fragment key={item.id} >
          <Title name='Artworks' content='Page with list artworks' />
          <PortfolioItem Component={item.Component} headText={item.headText} text={item.text} path={item.path} key={item.id} />
        </Fragment>
      )
    })
  )
}

export default Portfolio
