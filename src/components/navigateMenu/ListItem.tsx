import React from 'react';
import { NavLink } from 'react-router-dom';

import 'reactjs-popup/dist/index.css';

import styles from './styles/navigateMenu.module.scss'
import { activeClassListItem, classListItem } from './styles/navigateMenu'

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
