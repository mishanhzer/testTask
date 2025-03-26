import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Popup from 'reactjs-popup';
import { PopupActions } from 'reactjs-popup/dist/types';

import 'reactjs-popup/dist/index.css';

import { arrowPages } from '../../assets/logo/logo';

import styles from './styles/navigateMenu.module.scss'
import { activeClassListItem, classListItem, stylesPortfolioLinks } from './styles/navigateMenu'

interface TypesListItem {
  name: string
  path: string
}

const initialValueRef = {
  close: () => { },
  open: () => { },
  toggle: () => { }
}

export const PopupItem = ({ name, path }: TypesListItem) => {
  const ref = useRef<PopupActions>(initialValueRef);

  const handleClick = () => {
    if (ref.current) {
      setTimeout(() => {
        ref.current.close();
      }, 0)
    }
  }

  const data = [
    { name: 'Animals', path: '/portfolio/animals/1', class: stylesPortfolioLinks, func: handleClick },
    { name: 'Flowers', path: '/portfolio/flowers', class: stylesPortfolioLinks, func: handleClick },
    { name: 'Still life', path: '/portfolio/still_life', class: stylesPortfolioLinks, func: handleClick },
  ]

  const PortoflioLinks = () => {
    return (
      data.map((item, i) => {
        return (
          <NavLink key={i} onClick={item.func} className={item.class} to={item.path}>{item.name}</NavLink>
        )
      })
    )
  }

  return (
    <Popup
      ref={ref}
      closeOnDocumentClick
      on='hover'
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
      <PortoflioLinks />
    </Popup>
  )
}