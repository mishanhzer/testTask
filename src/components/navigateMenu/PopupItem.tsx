import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import Popup from 'reactjs-popup';
import { PopupActions } from 'reactjs-popup/dist/types';

import { useAnimalStore, useFlowersStore, useStillLifeStore } from '../../store/store'

import 'reactjs-popup/dist/index.css';

import { arrowPages } from '../../assets/logo/logo';

import styles from './styles/navigateMenu.module.scss'
import { activeClassListItem, activePicturesBlock, activeTest } from './styles/navigateMenu'

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
  const paramsStillLifeId = useStillLifeStore(state => state.paramsStillLifeId)
  const ref = useRef<PopupActions>(initialValueRef);

  const handleClick = () => {
    if (ref.current) {
      setTimeout(() => {
        ref.current.close();
      }, 0)
    }
  }

  const dataPortfolioLinks = [
    { name: 'Animals', path: `/portfolio/animals/${paramsId}`, class: styles.stylesPortfolioLinks, func: handleClick },
    { name: 'Flowers', path: `/portfolio/flowers/${paramdFlowersId}`, class: styles.stylesPortfolioLinks, func: handleClick },
    { name: 'Still life', path: `/portfolio/still_life/${paramsStillLifeId}`, class: styles.stylesPortfolioLinks, func: handleClick },
    { name: 'People and Animals', path: '/portfolio/people_and_animals/1', class: styles.stylesPortfolioLinks, func: handleClick },
  ]

  const PortoflioLinks = () => {
    return (
      dataPortfolioLinks.map((item, i) => {
        return (
          <NavLink
            key={i}
            onClick={item.func}
            // className={item.class}
            className={({ isActive }) => isActive ? classNames(item.class, styles.activePicturesBlock) : classNames(item.class, styles.nonActivePicturesBlock)}
            // style={activePicturesBlock}
            to={item.path}>{item.name}
          </NavLink>
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
        className={`flex ${styles.classListItem} relative`}>
        <NavLink
          to={path}
          className={styles.underlineAnimation}
          style={activeClassListItem}>
          {name}
        </NavLink>
        <img className={styles.stylePopupImg} src={arrowPages} alt="#" />
      </li>}
      position="bottom center">
      <PortoflioLinks />
    </Popup>
  )
}