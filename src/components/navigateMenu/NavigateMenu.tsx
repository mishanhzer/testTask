import React from "react"

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
      {data.map(item => {
        return (
          <ListItem name={item.name} path={item.path} />
        )
      })}
    </ul>
  )
}
