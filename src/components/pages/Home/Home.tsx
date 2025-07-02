import React from "react";

import { Title } from "../../UI_kits/LinkAndButton.tsx";
import { HomePicture } from "./HomePicture.tsx";
import { WhatsApp } from "../../whatsapp/WhatsApp.tsx";
import { nameHome, subheaderHome, mainDescriptionHome, subDescriptionHome } from './homeText.ts'

const Home = () => {
  return (
    <>
      <Title name='Elena Kozyutenko' content='Main page' />
      <div className={`flex w-1400 mx-auto justify-between mt-20`}>
        <div className={`flex flex-col w-2/4 justify-center items-center mx-auto`}>
          <div className={`text-7xl text-[#192e2f]`}>{nameHome}</div>
          <div className={`text-center mt-4 italic text-[#777777]`}>{subheaderHome}</div>
          <div className={`text-center w-510 mt-4 leading-7 text-[#777777]`}>
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