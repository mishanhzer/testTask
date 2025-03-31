import React from "react"

interface TypesButtonNavigate {
  className: string
  navigateFunc: () => void
  source: string
}

export const ButtonNavigate = ({ className, navigateFunc, source }: TypesButtonNavigate) => {
  return (
    <li className={className}>
      <button
        tabIndex={0}
        onClick={navigateFunc}
      >
        <img src={source} alt="#" />
      </button>
    </li>
  )
}