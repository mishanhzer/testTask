import React from "react";

import { Content } from "../../../../assets/images/works/allWorks/AllWorks";
import { filterFlowers } from "../../../../assets/images/works/allWorks/AllWorks";

import { Helmet } from "react-helmet";
import { Outlet, useOutlet } from "react-router-dom";
import styles from './styles/flowers.module.scss'

export const Flowers = () => {
  return (
    <>
      <div className={styles.container}>
        <Content works={filterFlowers} />
      </div>
    </>
  )
}