import React, { useState } from "react"
import { IStyledComponentBase, FastOmit } from "styled-components/dist/types";

import styles from '../../styles/mainStylesPictures.module.scss'

interface TypesTest {
  category: string;
  name: string;
  source: string;
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
  const [overlay, setOverlay] = useState(false)
  const [pictureName, setPictureName] = useState('')
  // console.log(overlay)

  const handleClick = (e) => {
    setOverlay(true)
    setPictureName(e.currentTarget.getAttribute('data-name'))
  }

  const handleClose = (e) => {
    console.log(e.target)
    setOverlay(false)
  }

  return (
    <div className={stylesContainer}>
      {displayedData.map((item, i) => (
        <AnimationContainer key={i}>
          <div onClick={handleClick} className={`${stylesWrapperImg}`} data-name={item.name}>
            {overlay && pictureName === item.name ?
              <div className={overlay ? styles.overlay : styles.noneDisplay}>
                <img className={`${styles.img} lozad`} src={item.source} alt={item.name} />
                <div onClick={handleClose} className={styles.close}></div>
              </div> : null
            }
            <img className={`${item.class} lozad`} src={item.source} alt={item.name} />
          </div>
        </AnimationContainer>
      ))}
    </div >
  )
}