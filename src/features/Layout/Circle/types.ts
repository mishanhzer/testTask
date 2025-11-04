import {TypesSlides} from '../AppWrapper/types'

export interface CircleTypes {
  handleClickNext: (slide: number) => void
  handleClickPrev: (slide: number) => void
  data: TypesSlides | undefined
  slide: number
  isAnimating: boolean
  circlePosition: number
  currentValue: number | undefined
  prevValue: number | undefined
  currentValueEnd: number | undefined
  prevValueEnd: number | undefined
}