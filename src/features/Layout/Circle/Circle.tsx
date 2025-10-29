import { useEffect, useState } from 'react'

import React from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './swiper.scss'
import styles from './circle.module.scss'

export const Circle = ({ data, slide, isAnimating, circlePosition }) => {

  // console.log(data?.years[0])
  // console.log(data?.years[data.years.length - 1])

  const styleTransform = {
    transform: `rotate(${circlePosition}deg)`,
    transition: isAnimating ? 'transform 1s ease-in-out' : '',
  }

  // console.log(circlePosition)
  return (
    <div className={styles.circleSliderContainer}>
      <div className={styles.circleSliderDateWrapper}>
        {/* <div className={styles.circeSliderFirstDate}>{data?.years[0]}</div> */}
        <div className={styles.circeSliderFirstDate}>{data?.years[0]}</div>
        <div className={styles.circeSliderSecondDate}>{data?.years[data.years.length - 1]}</div>
      </div>

      <div className={`${styles.circleWrapperAnimate}`} style={styleTransform}>

        {/* <div className={`${styles.circleBlock} ${slide === 1 ? styles.activeOne : styles.circleBlockOne}`}> */}
        <div className={`${styles.circleBlock} ${styles.active}`}>

          <div className={styles.circleNumber}>
            {/* {slide === 1 ? slide : ''} */}
            {slide}
          </div>
          <div className={styles.circleName}>
            {data?.name}
          </div>

        </div>

        <div className={`${styles.circleBlock} ${styles.circleBlockTwo}`}></div>
        <div className={`${styles.circleBlock} ${styles.circleBlockThree}`}></div>
        <div className={`${styles.circleBlock} ${styles.circleBlockFourth}`}></div>
        {/* <div className={`${slide === 3 ? '' : styles.circleBlock} ${slide === 3 ? styles.activeThree : styles.circleBlockThree}`}>
          {slide === 3 ? slide : ''}
        </div>
        <div className={`${slide === 4 ? '' : styles.circleBlock} ${slide === 4 ? styles.activeFour : styles.circleBlockFourth}`}>
          {slide === 4 ? slide : ''}
        </div> */}

        {/* <div className={`${slide === 2 ? '' : styles.circleBlock} ${slide === 2 ? styles.activeTwo : styles.circleBlockTwo}`}>
          {slide === 2 ? slide : ''}
        </div>
        <div className={`${slide === 3 ? '' : styles.circleBlock} ${slide === 3 ? styles.activeThree : styles.circleBlockThree}`}>
          {slide === 3 ? slide : ''}
        </div>
        <div className={`${slide === 4 ? '' : styles.circleBlock} ${slide === 4 ? styles.activeFour : styles.circleBlockFourth}`}>
          {slide === 4 ? slide : ''}
        </div> */}

      </div>

    </div>
  )
}