import React, { useEffect, useState, useRef } from 'react';
import useStore from '../store/store';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { elements, years1, text1, years2, text2, years3, text3, years4, text4, objScience } from './constants'
import 'swiper/swiper-bundle.css';

import styles from './appWrapper.module.scss'
import "./sliderSwiper.scss";

import arrow from '../../../assets/logo/arrow.svg'

export const AppWrapper = () => {
  const [data, setData] = useState(objScience)
  const [active, setActive] = useState(0)

  console.log(active)
  console.log(objScience.years[objScience.years.length - 1])
  console.log(objScience.years.length - 1)

  useEffect(() => {
    setData(objScience)
  })

  const handleClickNext = (index: number) => {
    index = index + 1
    if (index < objScience.years.length - 2) { // пока так напишем (это не всегда будет последним элементом)
      setActive(index)
    }
  }

  const handleClickPrev = (index: number) => {
    index = index - 1
    if (index >= 0 && index < objScience.years.length) {
      setActive(index)
    }
  }

  return (
    <div>
      <div className={styles.appWrapper}>

        <div className={styles.historyDate}>
          Исторические
          даты
        </div>


        {elements.map(el => {
          return <div
            key={el}
            className={styles.block}></div>
        })}


        {/* <MySlider data={data} /> */}
        <FooterSlider
          data={data}
          active={active}
          handleClickNext={handleClickNext}
          handleClickPrev={handleClickPrev} />

      </div>
    </div>
  );
}


export const MySlider = ({ data }) => {
  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    swiperRef.current.slideNext();
  };

  const handlePrevSlide = () => {
    swiperRef.current.slidePrev();
  };

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={50}
      slidesPerView={3}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      className="swiper-bg"
    >
      {data?.years.map((year, index) => (
        <SwiperSlide key={index}>
          <div className={styles.element}>
            <div className='years'>{year}</div>
            <div className='info'>{data.text[index]}</div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-next">
        <img src={arrow} className="btnArrow" alt="arrow" />
      </div>
      <div className="swiper-button-prev">
        <img src={arrow} className="btnArrow" alt="arrow" />
      </div>
    </Swiper>
  );
};








const FooterSlider = ({ data, active, handleClickNext, handleClickPrev }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.btnWrapper1}>
        <button
          className={active > 0 ? styles.btnPrev : ''}
          onClick={() => handleClickPrev(active)}>
          <img
            src={arrow}
            className={styles.btnArrow}
            alt="arrow" />
        </button>
      </div>

      <div className={styles.elements}>
        {data.years.map((year, i) => {
          return <div
            key={year}
            className={styles.element}>
            <div className={styles.years}>{data.years[i + active]}</div>
            <div className={styles.info}>{data.text[i + active]}</div>
          </div>
        })}

      </div>
      <div className={styles.btnWrapper2}>
        <button
          className={active < 3 ? styles.btnNext : ''}
          onClick={() => handleClickNext(active)} >
          <img
            src={arrow}
            className={styles.btnArrow}
            alt="arrow" />
        </button>
      </div>
    </div>
  )
}