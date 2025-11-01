import React, { useRef, useState } from "react";

import { Counter } from '../AppWrapper/Counter/Counter';

import gsap from "gsap";
import { useGSAP } from '@gsap/react';

import { CircleTypes } from './types'

import './swiper.scss'
import styles from './circle.module.scss'

export const Circle = ({
  data,
  slide,
  isAnimating,
  circlePosition,
  currentValue,
  prevValue,
  currentValueEnd,
  prevValueEnd }: CircleTypes) => {

  const circleRef = useRef(null);

  const [active, setActive] = useState('')

  const circleElementStylesActive = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    border: '1px solid rgba(48, 62, 88, 0.5)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-50px',
    marginLeft: '-50px',
    backgroundColor: '#F4F5F9',
  }

  const circleElementStylesNotActive = {
    width: '6px',
    height: '6px',
    backgroundColor: '#42567A',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-25px', /* Половина высоты */
    marginLeft: '-25px',
  }


  const handleMouseEnter = (e) => {
    const btnActive = e.currentTarget.getAttribute('data-btn')
    setActive(btnActive)
    // Анимация сжатия в точку (scale: 0) при наведении
    gsap.to(e.currentTarget, {
      ...circleElementStylesActive,
      duration: 0.5,
      scale: 1,
      ease: "power4.inOut",
    });
  };

  const handleMouseLeave = (e) => {
    setActive('notActive')
    // Анимация возврата к исходному размеру (scale: 1) при уходе курсора
    gsap.to(e.currentTarget, {
      ...circleElementStylesNotActive,
      duration: 0.5,
      scale: 1,
      ease: "power4.inOut",
    });
  };

  const styleTransform = {
    transform: `rotate(${circlePosition}deg)`,
    transition: isAnimating ? 'transform 1s ease-in-out' : '',
  }

  console.log(circlePosition)

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderDateWrapper}>
        <div className={styles.sliderFirstDate}>
          <Counter
            startNumber={prevValue}
            endNumber={currentValue}
            duration={1.5} />
        </div>
        <div className={styles.sliderSecondDate}>
          <Counter
            startNumber={prevValueEnd}
            endNumber={currentValueEnd}
            duration={1.5} />
        </div>

      </div>

      <div className={`${styles.wrapperAnimate}`} style={styleTransform}>

        <div
          ref={circleRef}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          className={`${styles.block} ${styles.active}`}>
          {/* <div className={`${styles.block}`}> */}
          <div className={styles.number}>
            {slide}
          </div>
          <div className={styles.name}>
            {data?.name}
          </div>
        </div>

        <div
          ref={circleRef}
          data-btn='activeTwo'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${styles.block} ${styles.blockTwo}`}>
          {active === 'activeTwo' ? slide + 1 : ''}
        </div>


        <div
          ref={circleRef}
          data-btn='activeThree'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${styles.block} ${styles.blockThree}`}>
          {active === 'activeThree' ? slide + 2 : ''}
        </div>


        <div
          ref={circleRef}
          data-btn='activeFour'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${styles.block} ${styles.blockFourth}`}>
          {active === 'activeFour' ? slide + 3 : ''}
        </div>
      </div>

    </div>
  )
}