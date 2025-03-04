import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { arrow } from "../../assets/logo/logo";

const classNamesLinkAndButton = `
  flex
  py-6 
  px-10
  bg-blue-900 
  text-white 
  items-center 
  font-serif 
  hover:transition
  hover:opacity-80
  group`;

const Image = ({ w, h }) => {
  return (
    <img
      className={`ml-2 ${w} ${h} group-hover:translate-x-1 group-hover: transition`}
      src={arrow}
      alt="#"
    />
  );
};

export const LinkComponent = ({ml, fz}) => {
  return (
    <Link 
      to="/contact" 
      className={twMerge(ml, fz, classNamesLinkAndButton)}
    >
      CONTACT ME
      <Image w="w-6" h="h-6" />
    </Link>
  );
};

export const ButtonComponent = ({mt, h, fz}) => {
  return (
    <div>
      <button 
        className={twMerge(mt, h, fz, classNamesLinkAndButton)}
        type="submit"
      >
        Submit
        <Image w="w-5" h="h-5" />
      </button>
    </div>
  );
};
