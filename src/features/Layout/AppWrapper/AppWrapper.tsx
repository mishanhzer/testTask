import 'swiper/css/swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { elements } from './constants'
import styles from './appWrapper.module.scss'

// Литература 
export const years1: number[] = [1992, 1994, 1995, 1997] // Диапазон 1992 по 1997
export const text1: string[] = [
  'Ноболевская премия по литературе - Дерек Уолкотт, «за блестящий образец карбиского эпоса в 64 разделах».',
  'Бессонница - Роман Стивена Кинга.',
  'Ноболевская премия по литературе - Шеймас Хини',
  'подписание контракта автора Tom Clancy на крупный литературно-медиа пакет, что отражает коммерческую сторону литературной индустрии.'
]

// Театр
export const years2: number[] = [1999, 2000, 2002, 2003, 2004] // // Диапазон 1999 по 2004

export const text2: string[] = [
  'премьера балета «Золушка» в постаноке Жан-Кристофа Майо, сценография Эрнеста Пиньона',
  'возобновлено издание журнала «Театр».',
  'премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон',
  '57-я церемония премии Tony Awards (США) прошла 8 июня 2003, хостом был Хью Джекман.',
  'В театре Gate Theatre (Лондон) вышла смелая постановка Woyzeck (реж. Дэниэль Креймер)'
]

// Кино
export const years3: number[] = [1987, 1988, 1989, 1990, 1991] // Диапазон 1987 по 1991

export const text3: string[] = [
  '«Хищник»/Predator, США(реж. Джон Мактирнан)',
  '«кто подставил кролика Роджера»/Who Framed Roger Rabbit, США(реж. Роберт Земекис)',
  '«Назад в будущее 2»/Back to the Future 2, США(реж. Роберт Земекис)',
  '«Крепкий орешек 2»/Die Hard 2, США(реж. Ренни Харлин)',
  '«Семейка Аддамса»/The Addams Family, США(реж. Барри Зонненфельд)',
]

// Наука
export const years4: number[] = [2015, 2016, 2017, 2018, 2019, 2020] // Диапазон 2015 по 2022

export const text4: string[] = [
  '13 сентября - частное солнечное затмение, видимо в Южной Африке и части Антарктиды',
  'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
  'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
  'Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца',
  'Google обьявил о создании 53-кубитного квантового компьютера.',
  'Корабль Crew Dragon вернулся на Землю из первого пилотируемого полета',
]

export const AppWrapper = () => {
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

        <div className={styles.footer}>
          {years4.map((year, i) => {
            return <div
              key={year}
              className={styles.element}>
              <div className={styles.years}>{year}</div>
              <div className={styles.info}>{text4[i]}</div>
            </div>
          })}
          <button>1</button>
        </div>



      </div>
    </div>
  );
}

export const MySwiper = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      {/* Добавьте больше слайдов, если необходимо */}
    </Swiper>
  );
}