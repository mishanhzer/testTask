import { useEffect, useState } from 'react'

import { CountUp } from 'countup.js';

import React from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CircleTypes } from './types'

import './swiper.scss'
import styles from './circle.module.scss'

export const Circle = ({ data, slide, isAnimating, circlePosition, currentValue, prevValue, value }: CircleTypes) => {

  const styleTransform = {
    transform: `rotate(${circlePosition}deg)`,
    transition: isAnimating ? 'transform 1s ease-in-out' : '',
  }

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderDateWrapper}>
        <div className={styles.sliderFirstDate}>{value}</div>
        <div className={styles.sliderSecondDate}>{data?.years[data.years.length - 1]}</div>
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