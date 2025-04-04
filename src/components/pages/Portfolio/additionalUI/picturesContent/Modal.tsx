import ReactDOM from 'react-dom';
import React, { useRef, useState, useEffect } from 'react';

interface TypesModalPortal {
  handleClose: () => void
  stylesOverlay: string
  stylesImg: string
  stylesModalWrapper: string
  stylesClose: string
  source?: string
  alt?: string
}

export const ModalPortal = ({ handleClose, stylesOverlay, stylesImg, stylesModalWrapper, stylesClose, source, alt }: TypesModalPortal) => {
  const [heightImage, setHeightImage] = useState()
  console.log(heightImage)

  const refTest = useRef(null)
  useEffect(() => {

    setHeightImage(refTest.current.getBoundingClientRect().height);
  }, [refTest])

  const portalDiv = document.getElementById('modal-root')!;

  return ReactDOM.createPortal(
    <div onClick={(e) => e.stopPropagation()}>
      <div onClick={handleClose} className={stylesOverlay}>
        <div onClick={(e) => e.stopPropagation()} className={stylesModalWrapper}>
          <button onClick={handleClose} className={stylesClose} />
          <img ref={refTest} className={`${stylesImg} lozad`} src={source} alt={alt} />
        </div>
      </div>
    </div>,
    portalDiv
  );
};
