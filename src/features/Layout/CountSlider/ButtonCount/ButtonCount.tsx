import { TypesButtonCount } from './types'

export const ButtonCount = ({ classBtn, func, source }: TypesButtonCount) => {
  return (
    <button
      className={classBtn}
      onClick={func}>
      <img
        src={source}
        alt="arrow" />
    </button>
  )
}