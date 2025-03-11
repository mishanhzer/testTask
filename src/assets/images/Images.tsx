import React from 'react'

import testImgForm from './testImgForm.png'
import mainPicture from './mainPicture.jpg'
import homePicture from './homePicture.jpg'

export { testImgForm, mainPicture }

export const MainPicture = () => {
  return (
    <img
      className={`w-128 h-15`}
      src={mainPicture}
      alt="mainPicture" />
  )
}

export const HomePicture = () => {
  return (
    <img
      className={`w-196 h-15`}
      src={homePicture}
      alt="homePicture" />
  )
}

