import { TypesSlides } from "../AppWrapper/types"

export interface TypesCountSlider {
  slide: number
  handleClickNext: (slide: number) => void
  handleClickPrev: (slide: number) => void
  dataSlides: TypesSlides[]
}