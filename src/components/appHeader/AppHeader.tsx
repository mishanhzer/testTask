import React from "react";
import "./appHeader.css";
import "./appHeader.scss";
import { images } from "../../assets/logo/logo";
import { mainLogo, basket, arrow } from "../../assets/logo/logo";

export const AppHeader = () => {
  return (
    <header className={`flex justify-between pt-8 items-center h-28`}>
      <div className={`flex flex-row w-1/4 justify-between`}>
        <div className={`flex w-28 justify-between`}>
          {images.map((item) => {
            return <Img key={item.name} src={item.src} />;
          })}
        </div>
      </div>
      <div>
        <img className={`w-24 rounded-full border-2 border-black border-solid`} src={mainLogo} alt="#" />
      </div>
      <div className={`flex justify-end items-center w-1/4 `}>
        <a className={`w-10`} href='#'>
          <img className={`w-5`} src={basket} alt="#" />
        </a>
          <a className={`flex ml-8 py-6 px-10
             bg-blue-900 
             text-base
              text-white 
              items-center 
              font-serif 
              hover:transition
               hover:bg-blue-500 
              group`} href='#'
            >
              CONTACT ME
              <img className={`ml-2 w-6 h-6 group:hover:translate-x-3`} src={arrow} alt="#" />
          </a>
      </div>
    </header>
  );
};

// export const AppHeader = () => {
//   return (
//     <header className="appHeader">
//       <div className="appHeader__wrapper">
//         <div className="appHeader__wrapper_content">
//           {images.map((item) => {
//             return <Img key={item.name} src={item.src} />;
//           })}
//         </div>
//       </div>
//       <div className="appHeader__img">
//         <img className={`w-16`} src={mainLogo} alt="#" />
//       </div>
//       <div className="appHeader__contact">
//         <a className="appHeader__contact_basket" href='#'>
//           <img className={`w-5`} src={basket} alt="#" />
//         </a>
//           <a className="appHeader__contact_contactBlock" href='#'>
//               CONTACT ME
//               <img src={arrow} alt="#" />
//           </a>
//       </div>
//     </header>
//   );
// };

const Img = ({ key, src }) => {
  return (
    <a key={key} href="#">
      <img className={`w-5 rounded-md`} src={src} alt="#" />
    </a>
  );
};
