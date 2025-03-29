import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Popup from 'reactjs-popup';
import { PopupActions } from 'reactjs-popup/dist/types';

import { useAnimalStore, useFlowersStore } from '../../store/store'

import 'reactjs-popup/dist/index.css';

import { arrowPages } from '../../assets/logo/logo';

import styles from './styles/navigateMenu.module.scss'
import { activeClassListItem, classListItem, stylesPortfolioLinks, stylePopupImg } from './styles/navigateMenu'

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
  const paramsId = useAnimalStore(state => state.paramsId)
  const paramdFlowersId = useFlowersStore(state => state.paramsFlowersId)
  const ref = useRef<PopupActions>(initialValueRef);

  const handleClick = () => {
    if (ref.current) {
      setTimeout(() => {
        ref.current.close();
      }, 0)
    }
  }

  const data = [
    { name: 'Animals', path: `/portfolio/animals/${paramsId}`, class: stylesPortfolioLinks, func: handleClick },
    { name: 'Flowers', path: `/portfolio/flowers/${paramdFlowersId}`, class: stylesPortfolioLinks, func: handleClick },
    { name: 'Still life', path: '/portfolio/still_life', class: stylesPortfolioLinks, func: handleClick },
    { name: 'People and Animals', path: '/portfolio/people_and_animals/1', class: stylesPortfolioLinks, func: handleClick },
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
        <img className={stylePopupImg} src={arrowPages} alt="#" />
      </li>}
      position="bottom center">
      <PortoflioLinks />
    </Popup>
  )
}