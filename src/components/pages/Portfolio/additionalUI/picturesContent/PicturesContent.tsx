import React, { useState } from "react"
import { IStyledComponentBase, FastOmit } from "styled-components/dist/types";

import Modal from 'react-modal';

import styles from '../../styles/mainStylesPictures.module.scss'
import './modal.scss'

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
  const [pictureName, setPictureName] = useState<string | null>('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const dataTarget = e.currentTarget.getAttribute('data-name')
    setPictureName(dataTarget)
  }

  const handleClose = () => {
    setPictureName('')
  }

  const Modal = ({ source, alt }: { source: string, alt: string }) => {
    return (
      <div onClick={(e) => e.stopPropagation()}>
        <div onClick={handleClose} className={styles.overlay}>
          <div onClick={(e) => e.stopPropagation()} className={styles.modalWrapper}>
            <button onClick={handleClose} className={styles.close}></button>
            <img className={`${styles.img} lozad`} src={source} alt={alt} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${stylesContainer}`}>
      {displayedData.map((item, i) => (
        <AnimationContainer key={i}>
          <div onClick={handleClick} className={`${stylesWrapperImg}`} data-name={item.name}>
            {pictureName === item.name ? <Modal source={item.source} alt={item.name} /> : null}
            <img className={`${item.class} lozad`} src={item.source} alt={item.name} />
          </div>
        </AnimationContainer>
      ))
      }
    </div >
  )
}