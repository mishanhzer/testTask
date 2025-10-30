import {TypesSlides} from '../AppWrapper/types'

export interface CircleTypes {
  data: TypesSlides | undefined
  slide: number
  isAnimating: boolean
  circlePosition: number
  currentValue: number 
  prevValue: number 
  currentValueEnd: number 
  prevValueEnd: number 
  value: number 
}