import React from 'react'

import testImgForm from './testImgForm.png'
import mainPicture from './mainPicture.jpg'

export { testImgForm, mainPicture }

export const MainPicture = () => {
  return (
    <img
      className={`w-128 h-15`}
      src={mainPicture}
      alt="mainPicture" />
  )
}