import React from 'react'
import { ButtonNavigate } from '../buttonNavigate/ButtonNavigate'
import { ListItemsPage } from '../ListItemsPage/ListItemsPages';

import { arrowPages, doubleArrowPages } from "../../../../../assets/logo/logo";
import styles from './animals.module.scss'

export const WidgetPages = ({ goStart, goBack, goForward, goEnd, callFuncLoading, animalsDataPages }) => {
  return (
    <ul className={styles.links}>
      <ButtonNavigate className={styles.listItemOnStart} navigateFunc={goStart} source={doubleArrowPages} />
      <ButtonNavigate className={styles.listItemPrev} navigateFunc={goBack} source={arrowPages} />
      <ListItemsPage
        callFuncLoading={callFuncLoading}
        data={animalsDataPages}
      />
      <ButtonNavigate className={styles.listItemNext} navigateFunc={goForward} source={arrowPages} />
      <ButtonNavigate className={styles.listItemOnEnd} navigateFunc={goEnd} source={doubleArrowPages} />
    </ul>
  )
}