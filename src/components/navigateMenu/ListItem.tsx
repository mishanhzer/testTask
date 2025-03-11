import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './styles/navigateMenu.module.scss'
import { activeClassListItem } from './styles/activeClassListItem'

interface TypesListItem {
  name: string
  path: string
}

export const ListItem = ({ name, path }: TypesListItem) => {
  return (
    <li
      className={`
    text-sm uppercase
    text-gray-500
    font-medium
    no-underline 
 `}>
      <NavLink
        to={path}
        className={style.underlineAnimation}
        style={activeClassListItem}>
        {name}
      </NavLink>
    </li>
  )
}