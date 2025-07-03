import React from 'react'
import { ButtonNavigate } from '../buttonNavigate/ButtonNavigate'
import { ListItemsPage } from '../ListItemsPage/ListItemsPages';

import { arrowPages, doubleArrowPages } from "../../../../../assets/logo/logo";

import styles from '../../mainStylesPictures.module.scss'

export const WidgetPages = ({ getStart, paginate, getEnd, dataPages }) => {
  return (
    <ul className={styles.links}>
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={(getStart)} source={doubleArrowPages} name={'start'} />
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={() => paginate('prev')} source={arrowPages} name={'prev'} />
      <ListItemsPage
        data={dataPages}
      />
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={() => paginate('next')} source={arrowPages} name={'next'} />
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={getEnd} source={doubleArrowPages} name={'end'} />
    </ul>
  )
}