import { Counter } from '../AppWrapper/Counter/Counter';

import { CircleTypes } from './types'

import './swiper.scss'
import styles from './circle.module.scss'

export const Circle = ({ data, slide, prevSlide, isAnimating, circlePosition, currentValue, prevValue, currentValueEnd, prevValueEnd }: CircleTypes) => {

  const styleTransform = {
    transform: `rotate(${circlePosition}deg)`,
    transition: isAnimating ? 'transform 1s ease-in-out' : '',
  }

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderDateWrapper}>
        <div className={styles.sliderFirstDate}>
          <Counter
            prev={prevValue}
            curr={currentValue}
            currentCount={prevValue}
            slide={slide}
            prevSlide={prevSlide} />
        </div>
        <div className={styles.sliderSecondDate}>
          <Counter
            prev={prevValueEnd}
            curr={currentValueEnd}
            currentCount={prevValueEnd}
            slide={slide}
            prevSlide={prevSlide} />
        </div>

      </div>

      <div className={`${styles.wrapperAnimate}`} style={styleTransform}>
        <div className={`${styles.block} ${styles.active}`}>
          <div className={styles.number}>
            {slide}
          </div>
          <div className={styles.name}>
            {data?.name}
          </div>
        </div>

        <div className={`${styles.block} ${styles.blockTwo}`}></div>
        <div className={`${styles.block} ${styles.blockThree}`}></div>
        <div className={`${styles.block} ${styles.blockFourth}`}></div>
      </div>

    </div>
  )
}