import React, { useCallback, useEffect, useRef, useState } from "react";

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

  const [activeTopElement, setActiveTopElement] = useState('activeOne');
  console.log(activeTopElement)

  const getActiveElementIndex = (currentAngle) => {
    const normalizedAngle = (currentAngle % 360 + 360) % 360;
    console.log((90 % 360 + 360) % 360)

    if (normalizedAngle === 0) return 'activeOne';
    if (normalizedAngle === 90) return 'activeFour';
    if (normalizedAngle === 180) return 'activeThree';
    if (normalizedAngle === 270) return 'activeTwo';

    return null;
  };


  const activeIndex = getActiveElementIndex(circlePosition);
  console.log("Активный элемент (сверху):", activeIndex);


  useEffect(() => {
    if (!isAnimating) {
      const activeIdx = getActiveElementIndex(circlePosition);
      setActiveTopElement(activeIdx);
      // Возможно, вам нужно установить active в 'activeOne', 'activeTwo' и т.д.
      // setActive(mapIndexToActiveState(activeIdx)); 
    }
  }, [isAnimating, circlePosition]);

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
    gsap.to(e.currentTarget, {
      ...circleElementStylesActive,
      duration: 0.4,
      scale: 1,
      ease: "power4.inOut",
    });
  };

  const handleMouseLeave = (e) => {
    setActive('notActive')
    gsap.to(e.currentTarget, {
      ...circleElementStylesNotActive,
      duration: 0.4,
      scale: 1,
      ease: "power4.inOut",
    });
  };

  const styleTransform = {
    transform: `rotate(${circlePosition}deg)`,
    transition: isAnimating ? 'transform 1s ease-in-out' : '',
  }

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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-btn='activeOne'
          className={`${activeTopElement === 'activeOne' ? `${styles.active}` : `${styles.block} ${styles.blockOne}`} ${styles.blockOne}`}>
          {/* <div className={`${styles.block}`}> */}
          <div className={styles.number}>
            {activeTopElement === 'activeOne' ? 1 : ''}
          </div>
          <div className={styles.name}>
            {activeTopElement === 'activeOne' ? data?.name : ''}
          </div>
        </div>




        <div
          // ref={circleRef}
          data-btn='activeTwo'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${activeTopElement === 'activeTwo' ? `${styles.active}` : `${styles.block} ${styles.blockTwo}`} ${styles.blockTwo}`}>
          {/* className={`${styles.block} ${styles.blockTwo}`}> */}
          {activeTopElement === 'activeTwo' ? 2 : ''}
        </div>


        <div
          // ref={circleRef}
          data-btn='activeThree'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${activeTopElement === 'activeThree' ? `${styles.active}` : `${styles.block} ${styles.blockThree}`} ${styles.blockThree}`}>
          {/* className={`${styles.block} ${styles.blockThree}`}> */}
          {activeTopElement === 'activeThree' ? 3 : ''}
        </div>


        <div
          // ref={circleRef}
          data-btn='activeFour'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${activeTopElement === 'activeFour' ? `${styles.active}` : `${styles.block} ${styles.blockFourth}`} ${styles.blockFourth}`}>
          {/* className={`${styles.block} ${styles.blockFourth}`}> */}
          {activeTopElement === 'activeFour' ? 4 : ''}
        </div>
      </div>

    </div >
  )
}