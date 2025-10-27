import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import 'swiper/swiper-bundle.css';
import styles from '../AppWrapper/appWrapper.module.scss'
import './sliderSwiper.scss'
import 'swiper/css/effect-fade';

import arrow from '../../../assets/logo/arrow.svg'

export const FooterSlider = ({ data, isAnimating }) => {
  const swiperRef = useRef<Swiper>(null);

  const [lastElem, setLastElem] = useState<boolean>()
  const [firstElem, setFirstElem] = useState<boolean>()

  console.log('update')

  useEffect(() => {
    // console.log(swiperRef?.current?.swiper)
    // setFirstElem(swiperRef?.current?.swiper.isBeginning)
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
            <div className={styles.element}>
              <div className='years'>{year}</div>
              <div className='info'>{data?.text[index]}</div>
            </div>
          </SwiperSlide>
        ))}
        <button
          className={lastElem ? "" : "swiper-button-next"}
          onClick={handleNextSlide}>
          <img src={arrow} className={lastElem ? "" : "btnArrow"} alt="arrow" />
        </button>
        <button
          className={firstElem ? "" : "swiper-button-prev"}
          onClick={handlePrevSlide}>
          <img src={arrow} className={firstElem ? "" : "btnArrow"} alt="arrow" />
        </button>
      </Swiper>
    </div>
  );
};






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