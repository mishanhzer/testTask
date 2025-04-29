import React from "react"

import styles from './styles/about.module.scss'

export const LastWorksHeader = () => {
  return (
    <div className={styles.lastWorksHeaderContainer}>
      <div className={styles.lastWorksHeader}>Latest works</div>
    </div>
  )
}

// export const LastWorks = ({ data }: dataTypes) => {
//   const [pictureName, setPictureName] = useState<string | null>('')

//   const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
//     const dataTarget = e.currentTarget.getAttribute('data-name')
//     setPictureName(dataTarget)
//   }

//   const handleClose = () => {
//     setPictureName('')
//   }
//   return (
//     <div className={styles.lastWorksContainer}>
//       {data.map(item => {
//         return (
//           <AnimationContainer>
//             <div
//               onClick={handleClick}
//               className={styles.wrapperImg}
//               data-name={item.name}>
//               {pictureName === item.name ?
//                 <ModalPortal
//                   position={pictureName}
//                   handleClose={handleClose}
//                   source={item.file}
//                   alt={item.name} /> : null}
//               <img className={`object-cover w-[350px] h-[350px] lozad`} src={item.sizes[0].url} alt={item.name} />
//             </div>
//           </AnimationContainer>
//         )
//       })}
//     </div>
//   )
// }