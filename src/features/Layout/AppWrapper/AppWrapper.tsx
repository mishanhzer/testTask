import React, { useEffect, useState, useRef } from 'react';
import useStore from '../store/store';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { FooterSlider } from '../FooterSlider/FooterSlider';

import 'swiper/css';

import { elements, dataSlides } from './constants'
import 'swiper/swiper-bundle.css';

import styles from './appWrapper.module.scss'
// import "./sliderSwiper.scss";

import arrow from '../../../assets/logo/arrow.svg'
import arrowTest from '../../../assets/logo/arrowTest.svg'

export const AppWrapper = () => {
  const [data, setData] = useState()
  const [slide, setSlide] = useState(1)

  console.log(data)

  useEffect(() => {
    setData(dataSlides[slide - 1])
    setSlide(slide)
  })

  const handleClickNext = (slide: number) => {
    slide = slide + 1
    if (slide <= dataSlides.length) {
      setSlide(slide)
    }
    if (dataSlides.length >= slide) {
      setData(dataSlides[slide - 1])
    }
  }

  const handleClickPrev = (slide: number) => {
    slide = slide - 1
    if (slide >= 1) {
      setSlide(slide)
    }
    if (dataSlides.length >= 1) {
      setData(dataSlides[slide - 1])
    }
  }

  return (
    <div>
      <div className={styles.appWrapper}>

        <div className={styles.historyDate}>
          Исторические
          даты
        </div>

        {/* <CountSlider
          slide={slide}
          handleClickNext={handleClickNext}
          handleClickPrev={handleClickPrev} /> */}

        <CountSlider
          slide={slide}
          handleClickNext={handleClickNext}
          handleClickPrev={handleClickPrev} />


        {elements.map(el => {
          return <div
            key={el}
            className={styles.block}></div>
        })}


        <FooterSlider data={data} />

        {/* <FooterSlider
          data={data}
          active={active}
          handleClickNext={handleClickNext}
          handleClickPrev={handleClickPrev} /> */}

      </div>
    </div>
  );
}


// export const MySlider = ({ data }) => {
//   const swiperRef = useRef<Swiper>(null);

//   const [lastElem, setLastElem] = useState()
//   const [firstElem, setFirstElem] = useState()

//   // useEffect(() => {
//   //   console.log(swiperRef?.current?.swiper)
//   //   setFirstElem(swiperRef?.current?.swiper.isBeginning)
//   // })

//   const handleNextSlide = () => {
//     if (swiperRef.current) {
//       swiperRef.current.swiper.slideNext();
//       setLastElem(swiperRef?.current?.swiper.isEnd)
//       setFirstElem(swiperRef?.current?.swiper.isBeginning)
//     }
//   };

//   const handlePrevSlide = () => {
//     swiperRef.current.swiper.slidePrev();
//     setFirstElem(swiperRef?.current?.swiper.isBeginning)
//     setLastElem(swiperRef?.current?.swiper.isEnd)
//     console.log(swiperRef?.current?.swiper)
//   };

//   return (
//     <Swiper
//       ref={swiperRef}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation={{
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       }}
//       className="swiper-bg"
//     >
//       {data?.years.map((year, index) => (
//         <SwiperSlide key={index}>
//           <div className={styles.element}>
//             <div className='years'>{year}</div>
//             <div className='info'>{data?.text[index]}</div>
//           </div>
//         </SwiperSlide>
//       ))}
//       <button
//         className={lastElem ? "" : "swiper-button-next"}
//         onClick={handleNextSlide}>
//         <img src={arrow} className={lastElem ? "" : "btnArrow"} alt="arrow" />
//       </button>
//       <button
//         className={firstElem ? "" : "swiper-button-prev"}
//         onClick={handlePrevSlide}>
//         <img src={arrow} className={firstElem ? "" : "btnArrow"} alt="arrow" />
//       </button>
//     </Swiper>
//   );
// };




// const CountSliderSwiper = ({ handleClickPrev, handleClickNext, slides }) => {
//   return (
//     <Swiper
//       slidesPerView={1}
//       spaceBetween={10}
//       navigation={{
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       }}
//       onSlideChange={(swiper) => handleClickPrev(swiper.activeIndex + 1)}
//       onSwiper={(swiper) => {
//         swiper.params.navigation.prevEl = '.swiper-button-prev';
//         swiper.params.navigation.nextEl = '.swiper-button-next';
//       }}
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <div className={styles.countNumbers}>{`0${slide + 1} / 0${slides.length}`}</div>
//         </SwiperSlide>
//       ))}
//       <div className="swiper-button-prev" onClick={() => handleClickPrev(slides[slides.length - 1] + 1)} />
//       <div className="swiper-button-next" onClick={() => handleClickNext(slides[0] + 1)} />
//     </Swiper>
//   )
// }

const CountSlider = ({ slide, handleClickNext, handleClickPrev }) => {
  return (
    <div className={styles.countSlider}>
      <div className={styles.countNumbers}>{`0${slide} / 0${dataSlides.length}`}</div>
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




// const FooterSlider = ({ data, active, handleClickNext, handleClickPrev }) => {
//   return (
//     <div className={styles.footer}>
//       <div className={styles.btnWrapper1}>
//         <button
//           className={active > 0 ? styles.btnPrev : ''}
//           onClick={() => handleClickPrev(active)}>
//           <img
//             src={arrow}
//             className={styles.btnArrow}
//             alt="arrow" />
//         </button>
//       </div>

//       <div className={styles.elements}>
//         {data.years.map((year, i) => {
//           return <div
//             key={year}
//             className={styles.element}>
//             <div className={styles.years}>{data.years[i + active]}</div>
//             <div className={styles.info}>{data.text[i + active]}</div>
//           </div>
//         })}

//       </div>
//       <div className={styles.btnWrapper2}>
//         <button
//           className={active < 3 ? styles.btnNext : ''}
//           onClick={() => handleClickNext(active)} >
//           <img
//             src={arrow}
//             className={styles.btnArrow}
//             alt="arrow" />
//         </button>
//       </div>
//     </div>
//   )
// }