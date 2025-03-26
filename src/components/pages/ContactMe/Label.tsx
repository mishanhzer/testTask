import React from "react"

interface TypesNameLabel {
  name: string
}

interface TypesLabel {
  classLabel: string
  nameLabel: string
}

const LabelContainer = ({ name }: TypesNameLabel) => {
  return (
    <div>{<span className={`text-red-500 self-center`}>*</span>} {name}</div>
  )
}

export const Label = ({ classLabel, nameLabel }: TypesLabel) => {
  return (
    <label className={classLabel}>{<LabelContainer name={nameLabel} />}</label>
  )
}
