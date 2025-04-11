import React from "react"

import styles from '../../styles/mainStylesPictures.module.scss'

interface TypesButtonNavigate {
  className: string
  navigateFunc: () => void
  source: string
  name: string
}

export const ButtonNavigate = ({ className, navigateFunc, source, name }: TypesButtonNavigate) => {
  return (
    <li className={className}>
      <button
        tabIndex={0}
        onClick={navigateFunc}
      >
        <img
          className={name === 'start' || name === 'prev' ? styles.listItemPrevAndStart : styles.listItemNextAndEnd}
          src={source}
          alt={name}
        />
      </button>
    </li>
  )
}