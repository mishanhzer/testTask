import React, { useEffect, useState } from "react";

import { Counter } from '../AppWrapper/Counter/Counter';
import { CircleElement } from "./CircleElement/CircleElement";

import { CircleTypes } from './types'

import './swiper.scss'
import styles from './circle.module.scss'

export const Circle = ({
  handleClickNext,
  handleClickPrev,
  data,
  isAnimating,
  circlePosition,
  currentValue,
  prevValue,
  currentValueEnd,
  prevValueEnd }: CircleTypes) => {

  const [active, setActive] = useState('')
  const [activeTopElement, setActiveTopElement] = useState<string | null>('activeOne');

  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    if (!isAnimating) {
      const activeIdx = getActiveElementIndex(circlePosition);
      setActiveTopElement(activeIdx);
    }
    if (isAnimating) {
      const timeoutId = setTimeout(() => setIsTextVisible(false), 0);
      return () => clearTimeout(timeoutId);
    } else {
      setIsTextVisible(true);
    }
  }, [isAnimating, circlePosition]);


  const getActiveElementIndex = (currentAngle) => {
    const normalizedAngle = (currentAngle % 360 + 360) % 360;

    if (normalizedAngle === 0) return 'activeOne';
    if (normalizedAngle === 90) return 'activeFour';
    if (normalizedAngle === 180) return 'activeThree';
    if (normalizedAngle === 270) return 'activeTwo';

    return null;
  };

  const isTopActive = (elementName) => activeTopElement === elementName;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isAnimating) {
      return;
    }

    const clickedElementId = `active${e.currentTarget.getAttribute('data-name')}`;
    if (activeTopElement === clickedElementId) {
      return;
    }

    switch (circlePosition) {
      case 0:
        if (active === '2') handleClickNext(1);
        if (active === '3') handleClickNext(2);
        if (active === '4') handleClickNext(3);
        break;
      case 90:
        if (active === '3') handleClickNext(2);
        if (active === '4') handleClickNext(3);
        if (active === '1') handleClickPrev(2);
        break;
      case 180:
        if (active === '4') handleClickNext(3);
        if (active === '2') handleClickNext(1);
        if (active === '1') handleClickPrev(2);
        break;
      case 270:
        if (active === '3') handleClickNext(2);
        if (active === '1') handleClickPrev(2);
        if (active === '2') handleClickNext(1);
        break;
      default:
        break;
    }
  };


  const styleTransform = {
    transform: `rotate(${-circlePosition}deg)`,
    transition: isAnimating ? 'transform 1s ease-in-out' : '',
  }

  const getCombinedStyle = (elementId: number) => {
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
        <CircleElement
          dataName={'One'}
          dataBtn={1}
          nameTopActive={'activeOne'}
          func={handleClick}
          isTopActive={isTopActive}
          setActive={setActive}
          numberActive='1'
          getCombinedStyle={getCombinedStyle}
          active={active}
          styles={styles}
          isTextVisible={isTextVisible}
          activeTopElement={activeTopElement}
          data={data} />

        <CircleElement
          dataName={'Four'}
          dataBtn={2}
          nameTopActive={'activeFour'}
          func={handleClick}
          isTopActive={isTopActive}
          setActive={setActive}
          numberActive='2'
          getCombinedStyle={getCombinedStyle}
          active={active}
          styles={styles}
          isTextVisible={isTextVisible}
          activeTopElement={activeTopElement}
          data={data} />

        <CircleElement
          dataName={'Three'}
          dataBtn={3}
          nameTopActive={'activeThree'}
          func={handleClick}
          isTopActive={isTopActive}
          setActive={setActive}
          numberActive='3'
          getCombinedStyle={getCombinedStyle}
          active={active}
          styles={styles}
          isTextVisible={isTextVisible}
          activeTopElement={activeTopElement}
          data={data} />

        <CircleElement
          dataName={'Two'}
          dataBtn={4}
          nameTopActive={'activeTwo'}
          func={handleClick}
          isTopActive={isTopActive}
          setActive={setActive}
          numberActive='4'
          getCombinedStyle={getCombinedStyle}
          active={active}
          styles={styles}
          isTextVisible={isTextVisible}
          activeTopElement={activeTopElement}
          data={data} />
      </div>
    </div >
  )
}