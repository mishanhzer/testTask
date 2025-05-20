import { TypesSizes } from '../../../assets/images/Images'

export interface TypesCommonData {
  name: string
  nameImg: string
  inStock: boolean
  salary: number
  description: string
  size: string
  materials: string
  active: boolean
  id: number
  file?: string
  path?: string
  preview?: string
  sizes?: TypesSizes[]
}
export interface TypesSaveActive {
  [key: number]: boolean
}

export interface CategoryProps {
  commonData: TypesCommonData[]
  limit: number
  handleClickLike: (e: React.MouseEvent<HTMLButtonElement>) => void
  saveActive: TypesSaveActive
  activeDiscount: boolean
}

export interface TypesLike {
  handleClickLike: (e: React.MouseEvent<HTMLButtonElement>) => void
  item: TypesCommonData
  saveActive: TypesSaveActive
}

export interface TypesSalary {
  item: TypesCommonData
  activeDiscount: boolean
}

export interface TypesButtonCart {
  item: TypesCommonData
  testClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  btnText: string
  style?: string
  img: () => React.ReactNode | null
}