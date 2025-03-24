import React from "react";

import { Title } from "../../UI_kits/LinkAndButton.tsx";
import { HomePicture } from "../../../assets/images/Images";
import { nameHome, subheaderHome, mainDescriptionHome, subDescriptionHome } from './homeText.ts'
import styles from './styles/home.module.scss'

const Home = () => {
  return (
    <>
      <Title name='Elena Kozyutenko' content='Main page' />
      <div className={`flex w-1400 mx-auto justify-between mt-20`}>
        <div className={`flex flex-col w-2/4 justify-center items-center mx-auto`}>
          <div className={`text-7xl ${styles.homeHeadTextStyle}`}>{nameHome}</div>
          <div className={`text-center mt-4 italic ${styles.homeTextStyle}`}>{subheaderHome}</div>
          <div className={`text-center w-510 mt-4 leading-7 ${styles.homeTextStyle}`}>
            {mainDescriptionHome}
            <br />
            <br />
            {subDescriptionHome}
          </div>
        </div>
        <div><HomePicture /></div>
      </div>
    </>
  )
}

export default Home