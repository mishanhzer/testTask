import ReactDOM from 'react-dom';
import React, { useRef, useState, useEffect } from 'react';

interface TypesModalPortal {
  handleClose: () => void
  stylesOverlay: string
  stylesImg: string
  stylesModalWrapper: string
  stylesLittleWindow: string
  stylesClose: string
  source?: string
  alt?: string
}



export const ModalPortal = ({ handleClose, stylesOverlay, stylesImg, stylesModalWrapper, stylesClose, source, alt, stylesLittleWindow }: TypesModalPortal) => {
  const [heightImage, setHeightImage] = useState()
  const [key, setKey] = useState(false)

  const refTest = useRef(null)
  useEffect(() => {

    setHeightImage(refTest.current.getBoundingClientRect().height);
  }, [refTest])

  const portalDiv = document.getElementById('modal-root')!;

  useEffect(() => {
    if (e.keyCode === 27) {
      setKey(true)
    }
    return () => {
      setKey(false)
    }
  }, [key])

  return ReactDOM.createPortal(
    <div onClick={(e) => e.stopPropagation()}>
      {/* <div onClick={handleClose} onKeyPress={keyClose} className={stylesOverlay}> */}
      <div
        onClick={() => {
          handleClose();
        }}
        onKeyPress={(e) => {
          if (e.key === 'Escape' || e.key === "Enter") {
            handleClose();
          }
        }} className={stylesOverlay}>
        <div onClick={(e) => e.stopPropagation()} className={heightImage === 420 ? stylesLittleWindow : stylesModalWrapper}>
          <button onClick={handleClose} className={stylesClose} />
          <img ref={refTest} className={`${stylesImg} lozad`} src={source} alt={alt} />
        </div>
      </div>
    </div>,
    portalDiv
  );
};
