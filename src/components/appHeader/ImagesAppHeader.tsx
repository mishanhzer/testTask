import React from "react";

interface TypesImagesAppHeader {
  source: string
  name: string
}

export const ImagesAppheader = ({ source, name }: TypesImagesAppHeader) => {
  return (
    <a href="#">
      <img className={`w-5 rounded-md`} src={source} alt={name} />
    </a>
  );
};
