import React from "react"

export const Label = ({ name }) => {
  return (
    <div>{<span className={`text-red-500 self-center`}>*</span>} {name}</div>
  )
}