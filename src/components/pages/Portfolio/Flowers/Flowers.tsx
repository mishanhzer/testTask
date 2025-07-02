import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { useFlowersStore, useStore } from '../../../../store/store'

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";
import { urlFlowers } from "../../../../utils/useTest.ts";

import { Spinner } from "../../../spinner/Spinner.tsx";
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx";
import { WhatsApp } from "../../../whatsapp/WhatsApp.tsx";

import { flowersDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts";

import styles from '../styles/mainStylesPictures.module.scss'

const pathFlowers: string = '/portfolio/flowers/'

const Flowers = () => {
  const flowers = useStore(state => state.flowers)

  const loading = useStore(state => state.loading)
  const offsetFlowers = useStore(state => state.offsetFlowers)
  const getData = useStore(state => state.getData)

  const navigate = useNavigate()
  const location = useLocation() as { pathname: string }

  const pageId: number = +location.pathname.slice(19, 21)

  useEffect(() => {
    navigate(`${pathFlowers}${pageId}`)
    getData('flowers', urlFlowers, 'offsetFlowers', offsetFlowers, 'pageFlowers', pageId)
  }, [])

  const paginate = (direction: string) => {
    const newOffset = direction === 'prev' ? Math.max(0, offsetFlowers - 9) : Math.min(18, offsetFlowers + 9)
    const newPage = direction === 'prev' ? Math.max(1, pageId - 1) : Math.min(3, pageId + 1)

    getData('flowers', urlFlowers, 'offsetFlowers', newOffset, 'pageFlowers', newPage)
    navigate(`${pathFlowers}${newPage}`)
  }

  const getStart = () => {
    getData('flowers', urlFlowers, 'offsetFlowers', 0, 'pageFlowers', 1)
    navigate(`${pathFlowers}1`)
  }

  const getEnd = () => {
    getData('flowers', urlFlowers, 'offsetFlowers', 18, 'pageFlowers', 3)
    navigate(`${pathFlowers}3`)
  }

  const flowersData =
    flowersDataPages(pathFlowers, styles.listItems,
      () => getData('flowers', urlFlowers, 'offsetFlowers', 0, 'pageFlowers', 1),
      () => getData('flowers', urlFlowers, 'offsetFlowers', 9, 'pageFlowers', 2),
      () => getData('flowers', urlFlowers, 'offsetFlowers', 18, 'pageFlowers', 3))

  const Content = () => {
    return (
      <>
        <WidgetPages
          getStart={getStart}
          getEnd={getEnd}
          paginate={paginate}
          dataPages={flowersData}
        />
        <PicturesContent
          displayedData={flowers}
          stylesContainer={styles.container}
          stylesWrapperImg={styles.wrapperImg}
        />
        <WhatsApp />
      </>
    )
  }

  return (
    loading === 'loading' ? <Spinner /> : <Content />
  )
}

export default Flowers



// import React, { useEffect } from "react";
// import { useNavigate, useLocation } from 'react-router-dom';

// import { useFlowersStore } from '../../../../store/store'

// import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";
// import { urlFlowers } from "../../../../utils/useTest.ts";

// import { Spinner } from "../../../spinner/Spinner.tsx";
// import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx";

// import { flowersDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts";

// import styles from '../styles/mainStylesPictures.module.scss'

// const pathFlowers: string = '/portfolio/flowers/'

// const Flowers = () => {
//   const flowers = useFlowersStore(state => state.flowers)

//   const loading = useFlowersStore(state => state.loading)
//   const offsetFlowers = useFlowersStore(state => state.offsetFlowers)
//   const getFlowers = useFlowersStore(state => state.getFlowers)

//   const navigate = useNavigate()
//   const location = useLocation()

//   const pageId: number = +location.pathname.slice(19, 21)

//   useEffect(() => {
//     navigate(`${pathFlowers}${pageId}`)
//     getFlowers(urlFlowers, offsetFlowers, pageId)
//   }, [])

//   const paginate = (direction: string) => {
//     const newOffset = direction === 'prev' ? Math.max(0, offsetFlowers - 9) : Math.min(18, offsetFlowers + 9)
//     const newPage = direction === 'prev' ? Math.max(1, pageId - 1) : Math.min(3, pageId + 1)

//     getFlowers(urlFlowers, newOffset, newPage)
//     navigate(`${pathFlowers}${newPage}`)
//   }

//   const getStart = () => {
//     getFlowers(urlFlowers, 0, 1)
//     navigate(`${pathFlowers}1`)
//   }

//   const getEnd = () => {
//     getFlowers(urlFlowers, 18, 3)
//     navigate(`${pathFlowers}3`)
//   }

//   const flowersData =
//     flowersDataPages(pathFlowers, styles.listItems,
//       () => getFlowers(urlFlowers, 0, 1),
//       () => getFlowers(urlFlowers, 9, 2),
//       () => getFlowers(urlFlowers, 18, 3))

//   const Content = () => {
//     return (
//       <>
//         <WidgetPages
//           getStart={getStart}
//           getEnd={getEnd}
//           paginate={paginate}
//           dataPages={flowersData}
//         />
//         <PicturesContent
//           displayedData={flowers}
//           stylesContainer={styles.container}
//           stylesWrapperImg={styles.wrapperImg}
//         />
//       </>
//     )
//   }

//   return (
//     loading === 'loading' ? <Spinner /> : <Content />
//   )
// }

// export default Flowers
