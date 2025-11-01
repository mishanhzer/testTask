export type TypesElements = string[]

export type TypesDataSlides = TypesSlides[]

export interface TypesSlides {
  name: string
  number: number
  years: number[]
  text: string[]
}

export type TypesState = number | undefined