import React, { useState } from "react"
import { IStyledComponentBase, FastOmit } from "styled-components/dist/types";

import Modal from 'react-modal';

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
  console.log(overlay)
  console.log(pictureName)

  const handleClick = (e) => {
    setOverlay(true)
    setPictureName(e.currentTarget.getAttribute('data-name'))
  }

  const handleClose = () => {
    setOverlay(false)
    setPictureName('')
    console.log('test')
  }

  return (
    <div className={stylesContainer}>
      {displayedData.map((item, i) => (
        <AnimationContainer key={i}>
          <div onClick={handleClick} className={`${stylesWrapperImg}`} data-name={item.name}>
            {pictureName === item.name ?
              <div className={styles.overlay}>
                <div className={styles.modalWrapper}>
                  <button onClick={handleClose} className={styles.close}></button>
                  <img className={`${styles.img} lozad`} src={item.source} alt={item.name} />
                </div>
              </div> : null
            }
            <img className={`${item.class} lozad`} src={item.source} alt={item.name} />
          </div>
        </AnimationContainer>
      ))}
    </div >
  )
}