import React from "react";

import { Basket } from "../../assets/logo/logoHeader/Basket";
import { LinkButton, LinkMainLogo } from "../UI_kits/LinkAndButton";
import { ImagesAppheader } from './ImagesAppHeader'

import { images } from "../../assets/logo/logo";
import "./appHeader.scss";

export const AppHeader = () => {
  return (
    <header className={`flex justify-between pt-8 items-center h-28`}>
      <div className={`flex flex-row w-1/4 justify-between`}>
        <div className={`flex w-28 justify-between`}>
          {images.map((item) => {
            return <ImagesAppheader key={item.name} source={item.src} name={item.name} />;
          })}
        </div>
      </div>
      <div>
        <LinkMainLogo />
      </div>
      <div className={`flex justify-end items-center w-1/4 `}>
        <a className="w-4" href="#">
          <Basket className="fill-gray-700 w-4 h-4 hover:fill-black hover:transition" />
        </a>
        <LinkButton ml='ml-8' fz='text-base' />
      </div>
    </header>
  );
};
