import React, { useRef, useEffect, useState, useCallback, SetStateAction } from 'react';

import { HistoryDate } from '../HistoryDate/HistoryDate';
import { FooterSlider } from '../FooterSlider/FooterSlider';
import { CountSlider } from '../CountSlider/CountSlider'
import { Circle } from '../Circle/Circle'

import { elements, dataSlides } from './constants'

import { gsap } from 'gsap';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

import styles from './appWrapper.module.scss'

import { TypesSlides, TypesState } from './types';

export const AppWrapper = () => {
  const [data, setData] = useState<TypesSlides>()
  const [slide, setSlide] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  const [circlePosition, setCirclePosition] = useState(0)

  const [currentValue, setCurrentValue] = useState<TypesState>(0);
  const [prevValue, setPrevValue] = useState<TypesState>(1987);

  const [currentValueEnd, setCurrentValueEnd] = useState<TypesState>(0)
  const [prevValueEnd, setPrevValueEnd] = useState<TypesState>(1991)

  const [value, setValue] = useState<TypesState>(0);

  useEffect(() => {
    setCurrentValue(data?.years[0])
    setCurrentValueEnd(data?.years[data.years.length - 1])
    setData(dataSlides[slide - 1])
    setSlide(slide)

    setValue(currentValue)
  })

  const mainLogics = (slide: number, operation: number) => {
    setPrevValue(currentValue);
    setPrevValueEnd(currentValueEnd)
    prevValue === 2015 ? 1987 : prevValue === 1987 ? 1999 : prevValue === 1999 ? 1992 : prevValue

    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    slide = operation

    if (slide >= 1 && slide <= dataSlides.length) {
      setSlide(slide)
    }

    if (dataSlides.length >= slide) {
      setData(dataSlides[slide - 1])
    }

    slide === 1 ? setCirclePosition(0) : slide === 2 ? setCirclePosition(90) : slide === 3 ? setCirclePosition(180) : slide === 4 ? setCirclePosition(270) : ''
  }

  const handleClickNext = (slide: number) => {
    mainLogics(slide, slide + 1)
  }

  const handleClickPrev = (slide: number) => {
    mainLogics(slide, slide - 1)
  }

  return (
    <div>
      <div className={styles.appWrapper}>
        <HistoryDate />

        <Circle
          data={data}
          slide={slide}
          isAnimating={isAnimating}
          circlePosition={circlePosition}
          currentValue={currentValue}
          prevValue={prevValue}
          currentValueEnd={currentValueEnd}
          prevValueEnd={prevValueEnd}
          value={value} />

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


