import ReactDOM from 'react-dom';
import React, { useRef, useState, useEffect, useMemo } from 'react';

import { AnimationSinglePicture } from '../dataPicturesAndFuncWidget'

import styles from '../../styles/mainStylesPictures.module.scss'

interface TypesModalPortal {
  handleClose: () => void
  source?: string
  alt?: string
}

export const ModalPortal = ({ handleClose, source, alt }: TypesModalPortal) => {
  const [heightImage, setHeightImage] = useState<number>(0)
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      setHeightImage((ref.current as unknown as HTMLElement).getBoundingClientRect().height);
    }
  }, [ref])

  const portalDiv = document.getElementById('modal-root')!;

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

  const handleClass = useMemo(() => {
    if (heightImage < 400) {
      return styles.smallWindow
    }
    if (heightImage >= 420 && heightImage <= 450) {
      return styles.littleWindow
    }
    if (heightImage > 795 && heightImage < 800) {
      return styles.modalWrapper
    }
    else {
      return styles.bigWindow
    }
  }, [heightImage > 0])

  return ReactDOM.createPortal(
    <AnimationSinglePicture>
      <div onClick={(e) => e.stopPropagation()}>
        <div
          onClick={() => handleClose()}
          className={`${styles.overlay}`}>
          <div onClick={(e) => e.stopPropagation()}
            className={handleClass}
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
