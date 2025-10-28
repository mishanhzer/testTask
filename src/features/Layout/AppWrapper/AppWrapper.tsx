import React, { useEffect, useState } from 'react';

import { FooterSlider } from '../FooterSlider/FooterSlider';
import { CountSlider } from '../CountSlider/CountSlider'

import { elements, dataSlides } from './constants'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

import styles from './appWrapper.module.scss'

import { TypesSlides } from './types';

export const AppWrapper = () => {
  const [data, setData] = useState<TypesSlides>()
  const [slide, setSlide] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  const [showContent, setShowContent] = useState(false);

  console.log(data)

  useEffect(() => {
    setData(dataSlides[slide - 1])
    setSlide(slide)
  })

  const handleClickNext = (slide: number) => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    slide = slide + 1
    if (slide <= dataSlides.length) {
      setSlide(slide)
    }
    if (dataSlides.length >= slide) {
      setData(dataSlides[slide - 1])
    }
    setShowContent(!showContent);
  }

  const handleClickPrev = (slide: number) => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    slide = slide - 1
    if (slide >= 1) {
      setSlide(slide)
    }
    if (dataSlides.length >= 1) {
      setData(dataSlides[slide - 1])
    }
  }

  console.log(data)

  return (
    <div>
      <div className={styles.appWrapper}>

        <div className={styles.historyDate}>
          Исторические
          даты
        </div>

        <div className={styles.circleSliderContainer}>
          <div className={styles.circleSliderDateWrapper}>
            <div className={styles.circeSliderFirstDate}>{data?.years[0]}</div>
            <div className={styles.circeSliderSecondDate}>{data?.years[data.years.length - 1]}</div>
          </div>

          <div className={`${slide === 1 ? '' : styles.circleBlock} ${slide === 1 ? styles.activeOne : styles.circleBlockOne}`}>{slide === 1 ? slide : ''}</div>
          <div className={`${slide === 2 ? '' : styles.circleBlock} ${slide === 2 ? styles.activeTwo : styles.circleBlockTwo}`}>{slide === 2 ? slide : ''}</div>
          <div className={`${slide === 3 ? '' : styles.circleBlock} ${slide === 3 ? styles.activeThree : styles.circleBlockThree}`}>{slide === 3 ? slide : ''}</div>
          <div className={`${slide === 4 ? '' : styles.circleBlock} ${slide === 4 ? styles.activeFour : styles.circleBlockFourth}`}>{slide === 4 ? slide : ''}</div>

        </div>





        <CountSlider
          slide={slide}
          handleClickNext={handleClickNext}
          handleClickPrev={handleClickPrev}
          dataSlides={dataSlides} />

        {elements.map(el => {
          return <div
            key={el}
            className={styles.block}></div>
        })}

        <FooterSlider
          data={data}
          isAnimating={isAnimating} />
      </div>
    </div >
  );
}


