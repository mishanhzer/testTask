import React from "react"
import { NavLink } from "react-router"

interface TypesAnimalsDataPages {
  path: string
  name: number
  source: string
  class: string
  func: () => void
}

export const ListItemsPage = ({ data }: { data: TypesAnimalsDataPages[] }) => {
  return data.map((item) => {
    const showSpinner = () => {
      item.func()
    }

    return (
      <li className={item.class} key={item.name}>
        <NavLink
          onClick={showSpinner}
          className={({ isActive }) => isActive ? 'border-b-2 border-navigateLinkColor' : 'none'}
          to={item.path}
        >
          {item.name}
        </NavLink>
      </li>
    )
  })
}