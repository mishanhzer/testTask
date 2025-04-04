import React, { useState } from "react"
import { IStyledComponentBase, FastOmit } from "styled-components/dist/types";

import { ModalPortal } from "./Modal";

import styles from '../../styles/mainStylesPictures.module.scss'

interface TypesTest {
  category: string;
  name?: string;
  source?: string;
  class: string;
  id: number;
}

interface TypesPicturesContent {
  stylesContainer: string;
  displayedData: TypesTest[];
  AnimationContainer: IStyledComponentBase<"web", FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string
  stylesWrapperImg: string;
}


export const PicturesContent = (
  {
    stylesContainer,
    displayedData,
    AnimationContainer,
    stylesWrapperImg,
  }: TypesPicturesContent) => {
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
          <div onClick={handleClick} className={`${stylesWrapperImg}`} data-name={item.name}>
            {pictureName === item.name ?
              <ModalPortal
                handleClose={handleClose}
                stylesOverlay={styles.overlay}
                stylesModalWrapper={styles.modalWrapper}
                stylesImg={styles.img}
                stylesClose={styles.close}
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