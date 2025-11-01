import { useState, useEffect } from 'react';

import { ButtonCount } from './ButtonCount/ButtonCount';

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
          <ButtonCount
            classBtn={styles.countSliderBtnPrev}
            func={() => handleClickPrev(slide)}
            source={arrowTest} />
          <ButtonCount
            classBtn={styles.countSliderBtnNext}
            func={() => handleClickNext(slide)}
            source={arrowTest} />
        </div>
      </div>
    </div>
  )
}