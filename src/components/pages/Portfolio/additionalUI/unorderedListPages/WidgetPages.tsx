import React from 'react'
import { ButtonNavigate } from '../buttonNavigate/ButtonNavigate'
import { ListItemsPage } from '../ListItemsPage/ListItemsPages';

import { arrowPages, doubleArrowPages } from "../../../../../assets/logo/logo";

import styles from '../../styles/mainStylesPictures.module.scss'

export const WidgetPages = ({ handleClickStart, handleClickBack, handleClickForward, handleClickEnd, dataPages }) => {
  return (
    <ul className={styles.links}>
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={handleClickStart} source={doubleArrowPages} name={'start'} />
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={handleClickBack} source={arrowPages} name={'prev'} />
      <ListItemsPage
        data={dataPages}
      />
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={handleClickForward} source={arrowPages} name={'next'} />
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={handleClickEnd} source={doubleArrowPages} name={'end'} />
    </ul>
  )
}