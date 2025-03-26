import React from 'react'
import homePicture from '../../../assets/images/homeImages/homePicture.jpg'

export const HomePicture = () => {
  return (
    <img
      className={`w-196 h-15`}
      src={homePicture}
      alt="homePicture" />
  )
}