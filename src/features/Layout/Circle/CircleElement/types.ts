import { TypesSlides } from "../../AppWrapper/types"

export interface TypesCircleElement {
  dataName: string
  dataBtn: number
  nameTopActive: string
  func: (e: React.MouseEvent<HTMLDivElement>) => void
  isTopActive: (elementName: string) => boolean
  setActive: (numberActive: string) => void
  active: string;
  numberActive: string
  getCombinedStyle: (elementId: number) => object
  styles: Record<string, string>
  isTextVisible: boolean
  activeTopElement: string | null
  data: TypesSlides | undefined
}

