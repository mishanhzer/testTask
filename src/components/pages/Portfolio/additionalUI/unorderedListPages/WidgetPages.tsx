import React from 'react'
import { ButtonNavigate } from '../buttonNavigate/ButtonNavigate'
import { ListItemsPage } from '../ListItemsPage/ListItemsPages';

import { arrowPages, doubleArrowPages } from "../../../../../assets/logo/logo";

import styles from '../../styles/mainStylesPictures.module.scss'

export const WidgetPages = ({ handleClickStart, handleClickBack, handleClickForward, handleClickEnd, callFuncLoading, dataPages }) => {
  return (
    <ul className={styles.links}>
      <ButtonNavigate className={styles.listItemOnStart} navigateFunc={handleClickStart} source={doubleArrowPages} />
      <ButtonNavigate className={styles.listItemPrev} navigateFunc={handleClickBack} source={arrowPages} />
      <ListItemsPage
        callFuncLoading={callFuncLoading}
        data={dataPages}
      />
      <ButtonNavigate className={styles.listItemNext} navigateFunc={handleClickForward} source={arrowPages} />
      <ButtonNavigate className={styles.listItemOnEnd} navigateFunc={handleClickEnd} source={doubleArrowPages} />
    </ul>
  )
}