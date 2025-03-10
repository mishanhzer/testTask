import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { arrow, mainLogo } from "../../assets/logo/logo";
import { classNamesLinkAndButton } from "./stylesUI_kits";

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
      to='/'>
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
      className={twMerge(ml, fz, classNamesLinkAndButton)}
    >
      CONTACT ME
      <ImageBtn w="w-6" h="h-6" />
    </Link>
  );
};

export const ButtonComponent = ({ mt, h, fz, disabled }: ButtonTypes) => {
  return (
    <div>
      <button
        disabled={disabled}
        className={twMerge(mt, h, fz, classNamesLinkAndButton)}
        type="submit"
      >
        Submit
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
