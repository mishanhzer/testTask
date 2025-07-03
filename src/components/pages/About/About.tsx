import React, { useEffect } from "react"
import { useStore } from '../../../store/store'

import { Spinner } from "../../spinner/Spinner"
import { AboutHeader } from './AboutHeader'
import { PicturesContent } from "../Portfolio/additionalUI/picturesContent/PicturesContent"
import { LastWorksHeader } from './LastWorks'
import { WhatsApp } from "../../whatsapp/WhatsApp"

import styles from './about.module.scss'

import { urlAllWorks } from "../../../utils/useTest"

const About = () => {
  const works = useStore(state => state.works).slice(-9)
  const getData = useStore(state => state.getData)
  const loading = useStore(state => state.loading)

  useEffect(() => {
    getData('works', urlAllWorks, 'offsetAllWorks', 0, 'pageAllWorks')
  }, [])

  return (
    <div className="pb-[100px]">
      <AboutHeader />
      <LastWorksHeader />
      {loading === 'loading' ?
        <Spinner /> :
        <PicturesContent
          stylesContainer={styles.lastWorksContainer}
          displayedData={works}
          stylesWrapperImg={styles.wrapperImg} />
      }
      <WhatsApp />
    </div>
  )
}

export default About