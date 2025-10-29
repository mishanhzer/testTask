import React, { use, useEffect, useState, useCallback } from 'react';

import { FooterSlider } from '../FooterSlider/FooterSlider';
import { CountSlider } from '../CountSlider/CountSlider'
import { Circle } from '../Circle/Circle'

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

  const [circlePosition, setCirclePosition] = useState(0)

  const [currentValue, setCurrentValue] = useState(0);
  const [prevValue, setPrevValue] = useState(0);

  console.log(currentValue)
  console.log(prevValue)

  // Countup.js использовать для анимации бегущего числа react

  useEffect(() => {
    setCurrentValue(data?.years[0])
    setData(dataSlides[slide - 1])
    setSlide(slide)
  })

  const handleToggle = useCallback(() => {
    let num = currentValue;

    const interval = setInterval(() => {
      if (isChecked) {
        num--
        if (num <= currentValue) {
          clearInterval(interval)
        }
      } else {
        num++
        if (num >= currentValue) {
          clearInterval(interval)
        }
      }

      setNumber(num)
    }, 25)
  }, [])

  const handleClickNext = (slide: number) => {
    setPrevValue(currentValue);
    setCurrentValue((prevValue) => {
      if (prevValue === 2015) {
        return 1987;
      }
      if (prevValue === 1987) {
        return 1999
      }
      if (prevValue === 1999) {
        return 1992
      }
    });


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

    if (slide === 1) {
      setCirclePosition(0)
    }
    if (slide === 2) {
      setCirclePosition(90)
    }
    if (slide === 3) {
      setCirclePosition(180)
    }
    if (slide === 4) {
      setCirclePosition(270)
    }
  }

  const handleClickPrev = (slide: number) => {
    setPrevValue(currentValue);
    setCurrentValue((prevValue) => {
      if (prevValue === 2015) {
        return 1987;
      }
      if (prevValue === 1987) {
        return 1999
      }
      if (prevValue === 1999) {
        return 1992
      }
    });

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

    if (slide === 1) {
      setCirclePosition(0)
    }
    if (slide === 2) {
      setCirclePosition(90)
    }
    if (slide === 3) {
      setCirclePosition(180)
    }
    if (slide === 4) {
      setCirclePosition(270)
    }
  }

  return (
    <div>
      <div className={styles.appWrapper}>

        <div className={styles.historyDate}>
          Исторические
          даты
        </div>

        <Circle
          data={data}
          slide={slide}
          isAnimating={isAnimating}
          circlePosition={circlePosition} />


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


