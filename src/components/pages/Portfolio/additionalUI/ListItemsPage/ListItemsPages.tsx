import React from "react"
import { NavLink } from "react-router"

import { activeClassPage } from "./styles/activeClassPage"

interface TypesAnimalsDataPages {
  path: string
  name: number
  source: string
  class: string
  func: () => void
}

export const ListItemsPage = ({ data, callFuncLoading }: { data: TypesAnimalsDataPages[], callFuncLoading: () => void }) => {
  return data.map((item) => {
    const showSpinner = () => {
      callFuncLoading()
      item.func()
    }

    return (
      <li className={item.class} key={item.name}>
        <NavLink onClick={showSpinner} style={activeClassPage} to={item.path}>{item.name}</NavLink>
      </li>
    )
  })
}