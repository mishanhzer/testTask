import React from "react";

import { Basket } from './imagesAppHeader/Basket'
import { LinkButton, LinkMainLogo } from "../UI_kits/LinkAndButton";
import { ImagesAppheader } from './imagesAppHeader/ImagesAppHeader'

import { images } from "./imagesAppHeader/Images";
import styles from './styles/styleAppHeader.module.scss'

export const AppHeader = () => {
  return (
    <header className={styles.styleHeader}>
      <div className={styles.styleDivContainer}>
        <div className={styles.styleDivContainerImages}>
          {images.map((item) => {
            return <ImagesAppheader key={item.name} source={item.src} name={item.name} />;
          })}
        </div>
      </div>
      <div>
        <LinkMainLogo />
      </div>
      <div className={styles.styleDivContainerBasket}>
        <a className="w-4" href="#">
          <Basket className={styles.styleBasket} />
        </a>
        <LinkButton ml='ml-8' fz='text-base' />
      </div>
    </header>
  );
};
