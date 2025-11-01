import {TypesSlides} from '../AppWrapper/types'

export interface CircleTypes {
  data: TypesSlides | undefined
  slide: number
  isAnimating: boolean
  circlePosition: number
  currentValue: number | undefined
  prevValue: number | undefined
  currentValueEnd: number | undefined
  prevValueEnd: number | undefined
}