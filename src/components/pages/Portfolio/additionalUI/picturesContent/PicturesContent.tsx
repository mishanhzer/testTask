import React, { useState } from "react"
import { AnimationContainer } from "../dataPicturesAndFuncWidget";

import { ModalPortal } from "./Modal";

interface TypesDisplayedData {
  category: string;
  name?: string;
  source?: string;
  class: string;
  id: number;
}

interface TypesPicturesContent {
  stylesContainer: string;
  displayedData: TypesDisplayedData[];
  stylesWrapperImg: string;
}

export const PicturesContent = ({ stylesContainer, displayedData, stylesWrapperImg }: TypesPicturesContent) => {
  const [pictureName, setPictureName] = useState<string | null>('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const dataTarget = e.currentTarget.getAttribute('data-name')
    setPictureName(dataTarget)
  }

  const handleClose = () => {
    setPictureName('')
  }

  return (
    <div className={`${stylesContainer}`}>
      {displayedData.map((item, i) => (
        <AnimationContainer key={i}>
          <div
            onClick={handleClick}
            className={`${stylesWrapperImg}`} data-name={item.name}>
            {pictureName === item.name ?
              <ModalPortal
                handleClose={handleClose}
                source={item.source}
                alt={item.name} /> : null}
            <img className={`${item.class} lozad`} src={item.source} alt={item.name} />
          </div>
        </AnimationContainer>
      ))
      }
    </div >
  )
}