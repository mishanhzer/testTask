import React from "react"

interface TypesTest {
  category: string;
  name: string;
  source: string;
  class: string;
  id: number;
}

export const PicturesContent = (
  {
    stylesContainer,
    displayedData,
    AnimationContainer,
    stylesWrapperImg }: { stylesContainer: string, displayedData: TypesTest[], AnimationContainer: any, stylesWrapperImg: string }) => {
  return (
    <div className={stylesContainer}>
      {displayedData.map((item, i) => (
        <AnimationContainer key={i}>
          <div className={`${stylesWrapperImg}`}>
            <img className={`${item.class} lozad`} src={item.source} alt={item.name} />
          </div>
        </AnimationContainer>
      ))}
    </div >
  )
}