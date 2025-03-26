import React from "react";

import { Basket } from './imagesAppHeader/Basket'
import { LinkButton, LinkMainLogo } from "../UI_kits/LinkAndButton";
import { ImagesAppheader } from './imagesAppHeader/ImagesAppHeader'

import { images } from "./imagesAppHeader/Images";
import { styleHeader, styleDivContainer, styleDivContainerImages, styleDivContainerBasket, styleBasket } from './styles/styleAppHeader'

export const AppHeader = () => {
  return (
    <header className={styleHeader}>
      <div className={styleDivContainer}>
        <div className={styleDivContainerImages}>
          {images.map((item) => {
            return <ImagesAppheader key={item.name} source={item.src} name={item.name} />;
          })}
        </div>
      </div>
      <div>
        <LinkMainLogo />
      </div>
      <div className={styleDivContainerBasket}>
        <a className="w-4" href="#">
          <Basket className={styleBasket} />
        </a>
        <LinkButton ml='ml-8' fz='text-base' />
      </div>
    </header>
  );
};
