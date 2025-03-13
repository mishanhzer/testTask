import React from "react";
import { Link, Outlet, useOutlet } from 'react-router-dom';

import { Animals } from "./Animals/Animals.tsx";
import { Title } from "../../UI_kits/LinkAndButton.tsx";
import { PortfolioItem, dataPortfolioItem } from "./PortfolioItem.tsx";

export const Portfolio = () => {
  const outlet = useOutlet();
  return (
    dataPortfolioItem.map(item => {
      return (
        <>
          <Title name='Artworks' content='Page with list artworks' />
          <div>
            <PortfolioItem Component={item.Component} headText={item.headText} text={item.text} key={item.id} />
            {/* {outlet ? <Outlet /> : <Animals />} */}
          </div>
        </>
      )
    })
  )
}