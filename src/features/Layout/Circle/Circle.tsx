import React, { useCallback, useEffect, useRef, useState } from "react";

import { Counter } from '../AppWrapper/Counter/Counter';

import { CircleTypes } from './types'

import './swiper.scss'
import styles from './circle.module.scss'

export const Circle = ({
  handleClickNext,
  handleClickPrev,
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

  const ELEMENT_ANGLES = {
    'activeOne': 0,
    'activeFour': 90,   // Элемент 2 в вашей разметке (data-name='Four')
    'activeThree': 180, // Элемент 3 в вашей разметке (data-name='Three')
    'activeTwo': 270,   // Элемент 4 в вашей разметке (data-name='Two')
  };

  const isTopActive = (elementName) => activeTopElement === elementName;

  console.log(circlePosition)
  console.log(activeTopElement)
  console.log(active)
  const handleClick = (e) => {
    const clickedElementName = e.currentTarget.getAttribute('data-name');
    const clickedElementId = `active${clickedElementName}`;

    // Если элемент уже наверху, ничего не делаем
    if (activeTopElement === clickedElementId) {
      return;
    }

    if (circlePosition === 0 && activeTopElement === 'activeOne' && active === '2') {
      handleClickNext(1)
    }

    if (circlePosition === 0 && activeTopElement === 'activeOne' && active === '3') {
      handleClickNext(2)
    }

    if (circlePosition === 0 && activeTopElement === 'activeOne' && active === '4') {
      handleClickNext(3)
    }


    // 90
    if (circlePosition === 90 && activeTopElement === 'activeFour' && active === '3') {
      handleClickNext(2)
    }

    if (circlePosition === 90 && activeTopElement === 'activeFour' && active === '4') {
      handleClickNext(3)
    }

    if (circlePosition === 90 && activeTopElement === 'activeFour' && active === '1') {
      handleClickPrev(2)
    }

    // 180
    if (circlePosition === 180 && activeTopElement === 'activeThree' && active === '4') {
      handleClickNext(2)
    }

    if (circlePosition === 180 && activeTopElement === 'activeThree' && active === '2') {
      handleClickPrev(2)
    }

    if (circlePosition === 180 && activeTopElement === 'activeThree' && active === '1') {
      handleClickPrev(2)
    }
    // switch (clickedElementBtn) {
    //     case '1':
    //         // Элемент 1 всегда находится на 0deg в базовой разметке
    //         if (circlePosition === 90) handleClickPrev(1); // 1 шаг назад
    //         if (circlePosition === 180) handleClickPrev(2); // 2 шага назад
    //         if (circlePosition === 270 || circlePosition === -90) handleClickPrev(3); // 3 шага назад (или 1 вперед, если хотите кратчайший путь)
    //         break;
    //     case '2':
    //         // Элемент 2 находится на 90deg в базовой разметке
    //         if (circlePosition === 0) handleClickNext(1); // 1 шаг вперед
    //         if (circlePosition === 180) handleClickPrev(1); // 1 шаг назад
    //         if (circlePosition === 270 || circlePosition === -90) handleClickPrev(2); // 2 шага назад
    //         break;
    //     case '3':
    //         // Элемент 3 находится на 180deg в базовой разметке
    //         if (circlePosition === 0) handleClickNext(2); // 2 шага вперед
    //         if (circlePosition === 90 || circlePosition === -270) handleClickNext(1); // 1 шаг вперед
    //         if (circlePosition === 270 || circlePosition === -90) handleClickPrev(1); // 1 шаг назад
    //         break;
    //     case '4':
    //         // Элемент 4 находится на 270deg в базовой разметке
    //         if (circlePosition === 0) handleClickNext(3); // 3 шага вперед
    //         if (circlePosition === 90 || circlePosition === -270) handleClickNext(2); // 2 шага вперед
    //         if (circlePosition === 180) handleClickNext(1); // 1 шаг вперед
    //         break;
    // }

  }

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
          onMouseEnter={() => !isTopActive('activeOne') && setActive('1')}
          onMouseLeave={() => !isTopActive('activeOne') && setActive('')}
          onClick={handleClick}
          data-name={'One'}
          data-btn={1}
          style={getCombinedStyle(1)}

          className={`${styles.block} ${isTopActive('activeOne') ? styles.activeTop : ''} ${active === '1' ? styles.hover : ''}`}>
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
          data-name={'Four'}
          data-btn={2}
          onClick={handleClick}
          onMouseEnter={() => !isTopActive('activeFour') && setActive('2')}
          onMouseLeave={() => !isTopActive('activeFour') && setActive('')}
          style={getCombinedStyle(2)}
          className={`${styles.block} ${isTopActive('activeFour') ? styles.activeTop : ''} ${active === '2' ? styles.hover : ''}`}>
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
          onMouseEnter={() => !isTopActive('activeThree') && setActive('3')}
          onMouseLeave={() => !isTopActive('activeThree') && setActive('')}
          onClick={handleClick}
          style={getCombinedStyle(3)}
          className={`${styles.block} ${isTopActive('activeThree') ? styles.activeTop : ''} ${active === '3' ? styles.hover : ''}`}>
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
          data-name={'Two'}
          data-btn={4}
          onMouseEnter={() => !isTopActive('activeTwo') && setActive('4')}
          onMouseLeave={() => !isTopActive('activeTwo') && setActive('')}
          onClick={handleClick}
          style={getCombinedStyle(4)}
          className={`${styles.block} ${isTopActive('activeTwo') ? styles.activeTop : ''} ${active === '4' ? styles.hover : ''}`}>
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