import React from "react";
import { Helmet } from "react-helmet";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { arrow, mainLogo } from "../../assets/logo/logo";

interface ImageTypes {
  w: string
  h: string
}

interface LinkTypes {
  ml: string
  fz: string
}

interface ButtonTypes {
  mt: string
  h: string
  fz: string
  disabled: boolean
}

export const LinkMainLogo = () => {
  return (
    <Link
      to='/home'>
      <img
        className={`w-24 rounded-full border-2 border-black border-solid`}
        src={mainLogo}
        alt="mainLogo"
      />
    </Link>
  )
}

export const LinkButton = ({ ml, fz }: LinkTypes) => {
  return (
    <Link
      to="/contact"
      className={twMerge(ml, fz, 'flex py-6 px-10 bg-blue-900 text-white items-center font-sans hover:transition hover:opacity-80 rounded-lg group')}
    >
      СВЯЗАТЬСЯ СО МНОЙ
      <ImageBtn w="w-6" h="h-6" />
    </Link>
  );
};

export const ButtonComponent = ({ mt, h, fz, disabled }: ButtonTypes) => {
  return (
    <div>
      <button
        disabled={disabled}
        className={twMerge(mt, h, fz, 'flex py-6 px-10 bg-blue-900 text-white items-center font-sans hover:transition hover:opacity-80 rounded-lg group')}
        type="submit"
      >
        Отправить
        <ImageBtn w="w-5" h="h-5" />
      </button>
    </div>
  );
};

const ImageBtn = ({ w, h }: ImageTypes) => {
  return (
    <img
      className={`ml-2 ${w} ${h} group-hover:translate-x-1 group-hover: transition`}
      src={arrow}
      alt="#"
    />
  );
};

export const Title = ({ name, content }) => {
  return (
    <Helmet>
      <meta
        name={name}
        content={content}
      />
      <title>{name}</title>
    </Helmet>
  )
}
