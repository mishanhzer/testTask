import React from "react";

import { Title } from "../../UI/LinkAndButton.tsx";
import { HomePicture } from "./HomePicture.tsx";
import { WhatsApp } from "../../whatsapp/WhatsApp.tsx";
import { nameHome, subheaderHome, mainDescriptionHome, subDescriptionHome } from './homeText.ts'

import styles from './home.module.scss'

const Home = () => {
  return (
    <>
      <Title name='Elena Kozyutenko' content='Main page' />
      <div className={styles.container}>
        <div className={styles.blockInfo}>
          <div className={styles.headerBlockInfo}>{nameHome}</div>
          <div className={styles.subheaderBlockInfo}>{subheaderHome}</div>
          <div className={styles.descriptionBlockInfo}>
            {mainDescriptionHome}
            <br />
            <br />
            {subDescriptionHome}
          </div>
        </div>
        <div><HomePicture /></div>
      </div>
      <WhatsApp />
    </>
  )
}

export default Home