import React from "react"

interface NameLabel {
  name: string
}

export const Label = ({ name }: NameLabel) => {
  return (
    <div>{<span className={`text-red-500 self-center`}>*</span>} {name}</div>
  )
}