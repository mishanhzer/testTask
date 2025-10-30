import { useState, useEffect } from 'react';

import styles from './countSlider.module.scss'

import { TypesCountSlider } from './types'

import arrowTest from '../../../assets/logo/arrowTest.svg'

export const CountSlider = ({ slide, handleClickNext, handleClickPrev, dataSlides }: TypesCountSlider) => {
  const [currentSlide, setCurrentSlide] = useState(slide)

  useEffect(() => {
    setCurrentSlide(slide)
  }, [slide])

  return (
    <div className={styles.countSlider}>
      <div className={`${styles.countNumbers}`}>
        {`0${currentSlide} / 0${dataSlides.length}`}
      </div>
      <div>
        <div className={styles.countSliderBtnWrapper}>
          <button
            className={styles.countSliderBtnPrev}
            onClick={() => handleClickPrev(slide)}>
            <img src={arrowTest} alt="arrow" />
          </button>
          <button
            className={styles.countSliderBtnNext}
            onClick={() => handleClickNext(slide)}>
            <img src={arrowTest} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}