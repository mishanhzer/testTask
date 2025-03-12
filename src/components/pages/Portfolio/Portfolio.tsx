import React from "react";

import { PortfolioItem, dataPortfolioItem } from "./PortfolioItem.tsx";

export const Portfolio = () => {
  return (
    dataPortfolioItem.map(item => {
      return (
        <PortfolioItem Component={item.Component} headText={item.headText} text={item.text} key={item.id} />
      )
    })
  )
}