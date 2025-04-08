import React from "react"
import 'reactjs-popup/dist/index.css';

import './styles/changePopupStyle.scss'

import { ListItem } from "./ListItem";
import { PopupItem } from "./PopupItem";
// import { ulClass } from "./styles/navigateMenu";
import styles from './styles/navigateMenu.module.scss'

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


