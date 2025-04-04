import ReactDOM from 'react-dom';
import React from 'react';

interface TypesModalPortal {
  handleClose: () => void
  stylesOverlay: string
}

export const ModalPortal = ({ handleClose, stylesOverlay, stylesImg, stylesModalWrapper, stylesClose, source, alt, name }) => {
  const portalDiv = document.getElementById('modal-root')!;

  return ReactDOM.createPortal(
    <div onClick={(e) => e.stopPropagation()}>
      <div onClick={handleClose} className={stylesOverlay}>
        <div onClick={(e) => e.stopPropagation()} className={stylesModalWrapper} data-name={name}>
          <button onClick={handleClose} className={stylesClose} />
          <img className={`${stylesImg} lozad`} src={source} alt={alt} />
        </div>
      </div>
    </div>,
    portalDiv
  );
};
