import { TypesCircleElement } from "./types"

export const CircleElement = ({
  dataName,
  dataBtn,
  nameTopActive,
  func,
  isTopActive,
  setActive,
  numberActive,
  getCombinedStyle,
  active,
  styles,
  isTextVisible,
  activeTopElement,
  data }: TypesCircleElement) => {
  return (
    <div
      data-name={dataName}
      data-btn={dataBtn}
      onClick={func}
      onMouseEnter={() => !isTopActive(nameTopActive) && setActive(numberActive)}
      onMouseLeave={() => !isTopActive(nameTopActive) && setActive('')}
      style={getCombinedStyle(dataBtn)}
      className={`${styles.block} ${isTopActive(nameTopActive) ? styles.activeTop : ''} ${active === numberActive ? styles.hover : ''}`}>
      {activeTopElement === nameTopActive ? dataBtn : ''}

      {active === numberActive ? active : ''}

      {isTextVisible && activeTopElement === nameTopActive && (
        <>
          <div className={styles.name}>
            {data?.name}
          </div>
        </>
      )}
    </div>
  )
}