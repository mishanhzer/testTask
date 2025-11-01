import { TypesButtonFooter } from "./types"

export const ButtonFooter = ({ elem, func, source, swiperClass }: TypesButtonFooter) => {
  return (
    <button
      className={elem ? "" : swiperClass}
      onClick={func}>
      <img
        src={source}
        className={elem ? "" : "btnArrow"}
        alt="arrow" />
    </button>
  )
}