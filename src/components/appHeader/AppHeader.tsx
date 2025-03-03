import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { images, mainLogo, arrow } from "../../assets/logo/logo";
import { Basket } from "../../assets/logo/logoHeader/Basket";

import "./appHeader.css";
import "./appHeader.scss";

export const AppHeader = () => {
  return (
    <header className={`flex justify-between pt-8 items-center h-28`}>
      <div className={`flex flex-row w-1/4 justify-between`}>
        <div className={`flex w-28 justify-between`}>
          {images.map((item) => {
            return <Img key={item.name} source={item.src} />;
          })}
        </div>
      </div>
      <div>
        <img
          className={`w-24 rounded-full border-2 border-black border-solid`}
          src={mainLogo}
          alt="#"
        />
      </div>
      <div className={`flex justify-end items-center w-1/4 `}>
        <a className="w-4" href="#">
          <Basket className="fill-gray-700 w-4 h-4 hover:fill-black hover:transition" />
        </a>
        {/* <a
          href="#"
          className={`flex ml-8 py-6 px-10
             bg-blue-900 
             text-base
              text-white 
              items-center 
              font-serif 
              hover:transition
              hover:opacity-80
              group`}
        >
          CONTACT ME
          <img
            className={`ml-2 w-6 h-6 group-hover:translate-x-1 group-hover: transition`}
            src={arrow}
            alt="#"
          />
        </a> */}
        <Link
          to="/contact"
          className={`flex ml-8 py-6 px-10
             bg-blue-900 
             text-base
              text-white 
              items-center 
              font-serif 
              hover:transition
              hover:opacity-80
              group`}
        >
          CONTACT ME
          <img
            className={`ml-2 w-6 h-6 group-hover:translate-x-1 group-hover: transition`}
            src={arrow}
            alt="#"
          />
        </Link>
      </div>
    </header>
  );
};

const Img = ({ source }) => {
  return (
    <a href="#">
      <img className={`w-5 rounded-md`} src={source} alt="#" />
    </a>
  );
};
