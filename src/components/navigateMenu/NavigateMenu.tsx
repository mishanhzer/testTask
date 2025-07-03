import React from "react"
import 'reactjs-popup/dist/index.css';

import './changePopupStyle.scss'

import { ListItem } from "./navigateMenuItems/ListItem";
import { PopupItem } from "./navigateMenuItems/PopupItem";

import styles from './navigateMenu.module.scss'

export const NavigateMenu = () => {
  return (
    <ul className={`${styles.ulClass} group`}>
      <ListItem name='home' path='/home' />
      <PopupItem name='portfolio' path='/portfolio' />
      <ListItem name='about' path='/about' />
      <ListItem name='contact' path='/contact' />
      <ListItem name='shop' path='/shop' />
    </ul>
  )
}


