import { useState } from 'react'

import styles from './circle.module.scss'

export const Circle = ({ data, slide, isAnimating, circlePosition }) => {
  const styleTransform = {
    transform: `rotate(${circlePosition}deg)`,
    transition: isAnimating ? 'transform 1s ease-in-out' : '',
  }

  console.log(circlePosition)
  return (
    <div className={styles.circleSliderContainer}>
      <div className={styles.circleSliderDateWrapper}>
        <div className={styles.circeSliderFirstDate}>{data?.years[0]}</div>
        <div className={styles.circeSliderSecondDate}>{data?.years[data.years.length - 1]}</div>
      </div>

      <div className={`${styles.circleWrapperAnimate}`} style={styleTransform}>

        <div className={`${slide === 1 ? '' : styles.circleBlock} ${slide === 1 ? styles.activeOne : styles.circleBlockOne}`}>
          {slide === 1 ? slide : ''}
          <div className={styles.circleName}>
            {data?.name}
          </div>
        </div>
        <div className={`${slide === 2 ? '' : styles.circleBlock} ${slide === 2 ? styles.activeTwo : styles.circleBlockTwo}`}>
          {slide === 2 ? slide : ''}
        </div>
        <div className={`${slide === 3 ? '' : styles.circleBlock} ${slide === 3 ? styles.activeThree : styles.circleBlockThree}`}>
          {slide === 3 ? slide : ''}
        </div>
        <div className={`${slide === 4 ? '' : styles.circleBlock} ${slide === 4 ? styles.activeFour : styles.circleBlockFourth}`}>
          {slide === 4 ? slide : ''}
        </div>

      </div>

    </div>
  )
}