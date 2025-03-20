import React, { Fragment } from "react";

import { Title } from "../../UI_kits/LinkAndButton.tsx";
import { PortfolioItem, dataPortfolioItem } from "./PortfolioItem.tsx";

export const Portfolio = () => {
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
