import React from 'react';
import { NavLink } from 'react-router-dom';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
  return (
    <Popup
      on='click'
      trigger={<li
        className={classListItem}>
        <NavLink
          to={path}
          className={styles.underlineAnimation}
          style={activeClassListItem}>
          {name}
        </NavLink>
      </li>}
      position="bottom center">
      <a href="#">Animals</a>
      <a href='#'>Flowers</a>
      <a href='#'>Stil life</a>
    </Popup>
  )
}