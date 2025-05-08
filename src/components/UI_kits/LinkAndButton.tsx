import React from "react";
import { Helmet } from "react-helmet";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { arrow, mainLogo } from "../../assets/logo/logo";

interface ImageTypes {
  w: string
  h: string
  turn: string
  translateX: string
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
  textBtn: string
  mx?: string
  turn: string
  translateX: string
  func?: () => void
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
      className={twMerge(ml, fz, 'flex py-6 px-10 bg-[rgba(0,91,255,1)] text-white items-center font-sans hover:transition hover:opacity-80 rounded-lg group')}
    >
      СВЯЗАТЬСЯ СО МНОЙ
      <ImageBtn w="w-6" h="h-6" turn="rotate-0" translateX="translate-x-1" />
    </Link>
  );
};

export const ButtonComponent = ({ mt, h, fz, disabled, mx, textBtn, turn, translateX, func }: ButtonTypes) => {
  return (
    <div>
      <button
        onClick={func}
        disabled={disabled}
        className={twMerge(mt, h, fz, mx, 'flex py-6 px-10 bg-[rgba(0,91,255,1)] text-white items-center font-sans hover:transition hover:opacity-80 rounded-lg group disabled:opacity-80')}
        type="submit"
      >
        {textBtn}
        <ImageBtn w="w-5" h="h-5" turn={turn} translateX={translateX} />
      </button>
    </div>
  );
};


const ImageBtn = ({ w, h, turn, translateX }: ImageTypes) => {
  return (
    <img
      className={`ml-2 ${w} ${h} group-hover:${translateX} group-hover: transition ${turn}`}
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
