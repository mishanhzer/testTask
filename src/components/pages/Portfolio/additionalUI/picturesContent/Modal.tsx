import ReactDOM from 'react-dom';
import React, { useRef, useEffect } from 'react';

import { AnimationSinglePicture } from '../dataPicturesAndFuncWidget'

import { positionModalTest } from '../dataPicturesAndFuncWidget';

import styles from '../../mainStylesPictures.module.scss'

interface TypesModalPortal {
  position: string
  handleClose: () => void
  source?: string
  alt?: string
}

export const ModalPortal = ({ position, handleClose, source, alt }: TypesModalPortal) => {
  const ref = useRef(null)

  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    window.addEventListener('keydown', closeModal)
    return () => {
      window.removeEventListener('keydown', closeModal)
    }
  }, [])

  const portalDiv = document.getElementById('modal-root')!;

  return ReactDOM.createPortal(
    <AnimationSinglePicture>
      <div onClick={(e) => e.stopPropagation()}>
        <div
          onClick={() => handleClose()}
          className={`${styles.overlay}`}>
          <div onClick={(e) => e.stopPropagation()}
            className={positionModalTest(styles.mainWrapperStyle, position)}
          >
            <button onClick={handleClose} className={styles.close} />
            <img ref={ref} className={`absolute lozad`} src={source} alt={alt} />
          </div>
        </div>
      </div>
    </AnimationSinglePicture >,
    portalDiv
  );
};
