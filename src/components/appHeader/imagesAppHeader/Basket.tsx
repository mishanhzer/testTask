import React from "react";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";

import { useStore } from "../../../store/store";

interface BasketProps {
  className?: string;
}

export const Basket = ({ className }: BasketProps) => {
  const picturesCart = useStore(state => state.picturesCart)
  const pictureCart = useStore(state => state.pictureCart)

  return (
    <NavLink to="/cart" className="relative">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="510"
        height="510"
        viewBox="0 0 510 510"
        xmlSpace="preserve"
        className={twMerge('w-20 h-20', className)}
      >
        <g>
          <g id="shopping-cart">
            <path
              d="M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306
			c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7
			c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408
			c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z"
            />
          </g>
        </g>
      </svg>
      {Object.keys(pictureCart).length > 0 ? <div className="absolute top-[-15px] right-[-15px] z-10 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] leading-[13px] flex justify-center items-center">{picturesCart.length}</div> : null}
      {/* <div className="absolute top-[-15px] right-[-15px] z-10 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex justify-center items-center">1</div> */}
    </NavLink>
  );
};
