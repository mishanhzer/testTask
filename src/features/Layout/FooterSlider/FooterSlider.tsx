import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import './sliderSwiper.scss'
import 'swiper/css/effect-fade';

import { TypesFooterSlider } from './types';

import arrow from '../../../assets/logo/arrow.svg'

export const FooterSlider = ({ data, isAnimating }: TypesFooterSlider) => {
  const swiperRef = useRef<Swiper>(null);

  const [lastElem, setLastElem] = useState<boolean>()
  const [firstElem, setFirstElem] = useState<boolean>()

  useEffect(() => {
    setFirstElem(true)
  }, [])

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
      setLastElem(swiperRef?.current?.swiper.isEnd)
      setFirstElem(swiperRef?.current?.swiper.isBeginning)
    }
  };

  const handlePrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
    setFirstElem(swiperRef?.current?.swiper.isBeginning)
    setLastElem(swiperRef?.current?.swiper.isEnd)
    console.log(swiperRef?.current?.swiper)
  };

  return (
    <div className={`container ${isAnimating ? 'animating' : ''}`}>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        effect="coverflow"
        className="swiper-bg"
      >
        {data?.years.map((year, index) => (
          <SwiperSlide key={index}>
            <div>
              <div className='years'>{year}</div>
              <div className='info'>{data?.text[index]}</div>
            </div>
          </SwiperSlide>
        ))}
        <button
          className={lastElem ? "" : "swiper-button-next"}
          onClick={handleNextSlide}>
          <img
            src={arrow}
            className={lastElem ? "" : "btnArrow"}
            alt="arrow" />
        </button>
        <button
          className={firstElem ? "" : "swiper-button-prev"}
          onClick={handlePrevSlide}>
          <img
            src={arrow}
            className={firstElem ? "" : "btnArrow"}
            alt="arrow" />
        </button>
      </Swiper>
    </div>
  );
};
