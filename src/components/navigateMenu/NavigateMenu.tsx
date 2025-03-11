import React from "react"
import { NavLink } from 'react-router-dom';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import style from './styles/navigateMenu.module.scss'
import './styles/changePopupStyle.scss'

import { ListItem } from "./ListItem";
import { ulClass } from "./styles/activeClassListItem";

interface TypesData {
  name: string
  path: string
}

const data: TypesData[] = [
  { name: 'home', path: '/home' },
  { name: 'portfolio', path: '/portfolio' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
  { name: 'shop', path: '/shop' },
]

export const NavigateMenu = () => {
  return (
    <ul className={ulClass}>
      <li
        className={`
          text-sm uppercase
          text-gray-500
          font-medium
          no-underline 
       `}>
        <NavLink
          to='/home'
          className={style.underlineAnimation}
          style={({ isActive }) => ({
            color: isActive ? 'rgba(156, 163, 175)' : 'inherit',
            textUnderlineOffset: isActive ? '10px' : '0px',
            textDecoration: isActive ? 'underline' : 'none',
            textDecorationThickness: isActive ? '1.5px' : '0px'
          })}>
          home
        </NavLink>
      </li>
      <li
        className={`
              text-sm uppercase
              text-gray-500
              font-medium
              no-underline 
           `}>
        <NavLink
          to='/portfolio'
          className={style.underlineAnimation}
          style={({ isActive }) => ({
            color: isActive ? 'rgba(156, 163, 175)' : 'inherit',
            textUnderlineOffset: isActive ? '10px' : '0px',
            textDecoration: isActive ? 'underline' : 'none',
            textDecorationThickness: isActive ? '1.5px' : '0px'
          })}>
          portfolio
        </NavLink>
      </li>


      <Popup
        on='click'
        trigger={<li
          className={`
                text-sm uppercase
                text-gray-500
                font-medium
                no-underline 
             `}>
          <NavLink
            to='/portfolio'
            className={style.underlineAnimation}
            style={({ isActive }) => ({
              color: isActive ? 'rgba(156, 163, 175)' : 'inherit',
              textUnderlineOffset: isActive ? '10px' : '0px',
              textDecoration: isActive ? 'underline' : 'none',
              textDecorationThickness: isActive ? '1.5px' : '0px'
            })}>
            portfolio
          </NavLink>
        </li>}
        position="bottom center">
        <a
          href="#">Animals</a>
        <a href='#'>Flowers</a>
        <a href='#'>Stil life</a>
      </Popup>
    </ul>
  )
}


