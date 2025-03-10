import React from "react"

import '../app/hover.css'
import style from './styles/navigateMenu.module.scss'

const data = [
  { name: 'home' },
  { name: 'portfolio' },
  { name: 'about' },
  { name: 'contact' },
  { name: 'shop' },
]

export const NavigateMenu = () => {
  return (
    <ul className={`w-420 flex mt-8 mx-auto justify-between group`}>
      {data.map(item => {
        return (
          <ListItem name={item.name} />
        )
      })}
    </ul>
  )
}

const ListItem = ({ name }) => {
  return (
    <li
      className={`
      text-sm uppercase
      text-gray-500
      font-medium
      no-underline 
   `}
    ><a
      className={style.underlineAnimation}
      href="#">{name}</a>
    </li>
  )
}