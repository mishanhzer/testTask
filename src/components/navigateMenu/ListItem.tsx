import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import 'reactjs-popup/dist/index.css';

import styles from '../../styles/stylesNavigateMenu/navigateMenu.module.scss'

interface TypesListItem {
  name: string
  path: string
}

export const ListItem = ({ name, path }: TypesListItem) => {
  return (
    <li
      className={`flex ${styles.classListItem} relative`}
    >
      <NavLink
        to={path}
        className={({ isActive }) => isActive
          ? classNames(styles.activeClassListItem, styles.underlineAnimation)
          : classNames(styles.underlineAnimation, `border-none`)}
      >
        {name}
      </NavLink>
    </li>
  )
}
