import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import Popup from 'reactjs-popup';
import { PopupActions } from 'reactjs-popup/dist/types';

import { useAnimalStore, useFlowersStore, useStillLifeStore, useStore } from '../../store/store'

import 'reactjs-popup/dist/index.css';

import { arrowPages } from '../../assets/logo/logo';

import styles from '../../styles/stylesNavigateMenu/navigateMenu.module.scss'

import { urlAnimals, urlFlowers, urlStillLife } from '../../utils/useTest';

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

  const getData = useStore(state => state.getData)
  const offsetAnimals = useStore(state => state.offsetAnimals)
  const pageAnimals = useStore(state => state.pageAnimals)

  const offsetFlowers = useStore(state => state.offsetFlowers)
  const pageFlowers = useStore(state => state.pageFlowers)

  const offsetStillLife = useStore(state => state.offsetStillLife)
  const pageStillLife = useStore(state => state.pageStillLife)

  const offsetPeopleAndAnimals = useStore(state => state.offsetPeopleAndAnimals)
  const pagePeopleAndAnimals = useStore(state => state.pagePeopleAndAnimals)

  const ref = useRef<PopupActions>(initialValueRef);

  const handleClick = () => {
    if (ref.current) {
      setTimeout(() => {
        ref.current.close();
      }, 0)
    }
  }

  const dataPortfolioLinks = [
    // { name: 'Animals', path: `/portfolio/animals/${pageAnimals}`, class: styles.stylesPortfolioLinks, func: () => { getData('animals', urlAnimals, 'offsetAnimals', offsetAnimals, 'pageAnimals', pageAnimals); handleClick() } },
    // { name: 'Flowers', path: `/portfolio/flowers/${pageFlowers}`, class: styles.stylesPortfolioLinks, func: () => { getData('flowers', urlFlowers, 'offsetFlowers', offsetFlowers, 'pageFlowers', pageFlowers); handleClick() } },
    // { name: 'Still life', path: `/portfolio/still_life/${pageStillLife}`, class: styles.stylesPortfolioLinks, func: () => { getData('stillLife', urlStillLife, 'offsetStillLife', offsetStillLife, 'pageStillLife', pageStillLife); handleClick() } },
    { name: 'Animals', path: `/portfolio/animals/${pageAnimals === 0 ? 1 : pageAnimals}`, class: styles.stylesPortfolioLinks, func: handleClick },
    { name: 'Flowers', path: `/portfolio/flowers/${pageFlowers === 0 ? 1 : pageFlowers}`, class: styles.stylesPortfolioLinks, func: handleClick },
    { name: 'Still life', path: `/portfolio/still_life/${pageStillLife === 0 ? 1 : pageStillLife}`, class: styles.stylesPortfolioLinks, func: handleClick },
    { name: 'People and Animals', path: `/portfolio/people_and_animals/${pagePeopleAndAnimals === 0 ? 1 : pagePeopleAndAnimals}`, class: styles.stylesPortfolioLinks, func: handleClick },
  ]

  const PortoflioLinks = () => {
    return (
      dataPortfolioLinks.map((item, i) => {
        return (
          <NavLink
            key={i}
            onClick={item.func}
            className={({ isActive }) => isActive
              ? classNames(item.class, styles.activePicturesBlock)
              : classNames(item.class, styles.nonActivePicturesBlock)}
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
      trigger={<li className={`flex ${styles.classListItem} relative`}>
        <NavLink
          to={path}
          className={({ isActive }) => isActive
            ? classNames(styles.activeClassListItem, styles.underlineAnimation, `flex`)
            : classNames(styles.underlineAnimation, `flex border-none`)}
        >
          {name}
          <img className={styles.stylePopupImg} src={arrowPages} alt="#" />
        </NavLink>
      </li>}
      position="bottom center">
      <PortoflioLinks />
    </Popup>
  )
}