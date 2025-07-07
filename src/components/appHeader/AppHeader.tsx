import React from "react";

import { Basket } from "../UI/Basket";
import { LinkButton, LinkMainLogo } from "../UI/LinkAndButton";
import { ImagesAppheader } from "../../assets/images/Images";

import { images } from "../../assets/images/Images";

import styles from './appHeader.module.scss'

export const AppHeader = () => {
  return (
    <header className={styles.styleHeader}>
      <div className={styles.styleDivContainer}>
        <div className={styles.styleDivContainerImages}>
          {images.map((item) => {
            return <ImagesAppheader key={item.name} source={item.src} name={item.name} link={item.link} />;
          })}
        </div>
      </div>
      <div>
        <LinkMainLogo />
      </div>
      <div className={styles.styleDivContainerBasket}>
        <Basket className={styles.styleBasket} />
        <LinkButton ml='ml-8' fz='text-base' />
      </div>
    </header>
  );
};
