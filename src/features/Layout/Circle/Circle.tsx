import React, { useCallback, useEffect, useRef, useState } from "react";

import { Counter } from '../AppWrapper/Counter/Counter';

import gsap from "gsap";
import { useGSAP } from '@gsap/react';

import { CircleTypes } from './types'

import './swiper.scss'
import styles from './circle.module.scss'
import test from "node:test";

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

  const [isTextVisible, setIsTextVisible] = useState(true);

  const getActiveElementIndex = (currentAngle) => {
    const normalizedAngle = (currentAngle % 360 + 360) % 360;

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
    if (isAnimating) {
      const timeoutId = setTimeout(() => setIsTextVisible(false), 0);
      return () => clearTimeout(timeoutId);
    } else {
      setIsTextVisible(true);
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
    const btnName = e.currentTarget.getAttribute('data-name')
    if (activeTopElement === `active${btnName}`) {
      return;
    }
    setActive(btnActive)
    gsap.to(e.currentTarget, {
      ...circleElementStylesActive,
      duration: 0.4,
      scale: 1,
      ease: "power4.inOut",
    });
  };

  const handleMouseLeave = (e) => {
    const btnName = e.currentTarget.getAttribute('data-name')
    if (activeTopElement === `active${btnName}`) {
      return;
    }
    setActive('')
    gsap.to(e.currentTarget, {
      ...circleElementStylesNotActive,
      duration: 0.4,
      scale: 1,
      ease: "power4.inOut",
    });
  };

  const styleTransform = {
    transform: `rotate(${-circlePosition}deg)`,
    transition: isAnimating ? 'transform 1s ease-in-out' : '',
  }

  const getCombinedStyle = (elementId) => {
    let translateString = '';

    switch (elementId) {
      case 1:
        translateString = 'translate(20px, -242px)';
        break;
      case 2:
        translateString = 'translate(287px, 20px)';
        break;
      case 3:
        translateString = 'translate(20px, 287px)';
        break;
      case 4:
        translateString = 'translate(-242px, 20px)';
        break;
      default:
        translateString = 'translate(0, 0)';
    }

    return {
      transform: `${translateString} rotate(${circlePosition}deg)`,
    };
  };

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
          data-name={'One'}
          data-btn={1}
          style={getCombinedStyle(1)}
          className={`${activeTopElement === 'activeOne' ? `${styles.active}` : `${styles.block} ${styles.blockOne}`} ${styles.blockOne}`}>
          <div className={styles.number}>
            {activeTopElement === 'activeOne' ? 1 : ''}
            {active === '1' ? active : ''}
          </div>

          {isTextVisible && activeTopElement === 'activeOne' && (
            <>
              <div className={styles.name}>
                {data?.name}
              </div>
            </>
          )}
        </div>

        <div
          // ref={circleRef}
          data-name={'Two'}
          data-btn={2}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={getCombinedStyle(2)}
          className={`${activeTopElement === 'activeFour' ? `${styles.active}` : `${styles.block} ${styles.blockTwo}`} ${styles.blockTwo}`}>
          {activeTopElement === 'activeFour' ? 2 : ''}

          {active === '2' ? active : ''}

          {isTextVisible && activeTopElement === 'activeFour' && (
            <>
              <div className={styles.name}>
                {data?.name}
              </div>
            </>
          )}

        </div>


        <div
          // ref={circleRef}
          data-name={'Three'}
          data-btn={3}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={getCombinedStyle(3)}
          className={`${activeTopElement === 'activeThree' ? `${styles.active}` : `${styles.block} ${styles.blockThree}`} ${styles.blockThree}`}>
          {activeTopElement === 'activeThree' ? 3 : ''}
          {active === '3' ? active : ''}

          {isTextVisible && activeTopElement === 'activeThree' && (
            <>
              <div className={styles.name}>
                {data?.name}
              </div>
            </>
          )}
        </div>


        <div
          // ref={circleRef}
          data-name={'Four'}
          data-btn={4}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={getCombinedStyle(4)}
          className={`${activeTopElement === 'activeTwo' ? `${styles.active}` : `${styles.block} ${styles.blockFourth}`} ${styles.blockFourth}`}>
          {activeTopElement === 'activeTwo' ? 4 : ''}
          {active === '4' ? active : ''}
          {isTextVisible && activeTopElement === 'activeTwo' && (
            <>
              <div className={styles.name}>
                {data?.name}
              </div>
            </>
          )}
        </div>
      </div>

    </div >
  )
}