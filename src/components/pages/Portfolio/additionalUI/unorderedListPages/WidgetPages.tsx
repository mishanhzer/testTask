import React from 'react'
import { ButtonNavigate } from '../buttonNavigate/ButtonNavigate'
import { ListItemsPage } from '../ListItemsPage/ListItemsPages';

import { arrowPages, doubleArrowPages } from "../../../../../assets/logo/logo";

import styles from '../../styles/mainStylesPictures.module.scss'

export const WidgetPages = ({ getStart, getPrev, getNext, getEnd, dataPages }) => {
  return (
    <ul className={styles.links}>
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={(getStart)} source={doubleArrowPages} name={'start'} />
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={getPrev} source={arrowPages} name={'prev'} />
      <ListItemsPage
        data={dataPages}
      />
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={getNext} source={arrowPages} name={'next'} />
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={getEnd} source={doubleArrowPages} name={'end'} />
    </ul>
  )
}