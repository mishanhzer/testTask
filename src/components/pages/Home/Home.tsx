import React from "react";

import { HomePicture } from "../../../assets/images/Images";
import style from './styles/home.module.scss'

export const Home = () => {
  return (
    <div className={`flex w-1400 mx-auto justify-between mt-20`}>
      <div className={`flex flex-col w-2/4 justify-center items-center mx-auto`}>
        <div className={`text-7xl ${style.homeHeadTextStyle}`}>Елена Козютенко</div>
        <div className={`text-center mt-4 italic ${style.homeTextStyle}`}>« Художник пользуется красками, но пишет чувствами. »</div>
        <div className={`text-center w-510 mt-4 leading-7 ${style.homeTextStyle}`}>Меня зовут Елена. Я художница из Сибири.
          С раннего детства, как и многие другие, я очень любила рисовать. Когда я училась в школе, я в основном рисовала графические работы карандашом на бумаге. Это были зарисовки людей и животных. Получая высшее педагогическое образование в институте, я прослушала курсы "Основы живописи и графики" и "Основы декоративно-прикладного искусства". Несколько лет работала в школе учителем изобразительного искусства.
          <br /><br />Я всегда хотела рисовать по зову сердца, но у меня было мало свободного времени - работа, семья, дети, а самое главное - нерешительность..</div>
      </div>
      <div><HomePicture /></div>
    </div>
  )
}