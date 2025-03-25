import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';

import { arrowPages } from '../../assets/logo/logo';

import styles from './styles/navigateMenu.module.scss'
import { activeClassListItem, classListItem } from './styles/activeClassListItem'

interface TypesListItem {
  name: string
  path: string
}

export const ListItem = ({ name, path }: TypesListItem) => {
  return (
    <li
      className={classListItem}>
      <NavLink
        to={path}
        className={styles.underlineAnimation}
        style={activeClassListItem}>
        {name}
      </NavLink>
    </li>
  )
}

export const PopupItem = ({ name, path }: TypesListItem) => {
  // interface TypesRef {
  //   ref: null
  // }
  const ref = useRef<HTMLDivElement>();
  const closeTooltip = () => ref.current.close();

  return (
    <Popup
      closeOnDocumentClick
      on='click'
      trigger={<li
        className={`flex ${classListItem}`}>
        <NavLink
          to={path}
          className={styles.underlineAnimation}
          style={activeClassListItem}>
          {name}
        </NavLink>
        <img className={`ml-1 self-center w-3 h-3 -rotate-90 hover:`} src={arrowPages} alt="#" />
      </li>}
      position="bottom center">
      <NavLink onClick={closeTooltip} className={`w-1/3 outline-none hover:text-black`} to='/portfolio/animals/1'>Animals</NavLink>
      <NavLink className={`w-1/3 outline-none hover:text-black`} to='/portfolio/flowers'>Flowers</NavLink>
      <NavLink className={`w-1/3 outline-none hover:text-black`} to='/portfolio/still_life'>Still life</NavLink>
    </Popup>
  )
}