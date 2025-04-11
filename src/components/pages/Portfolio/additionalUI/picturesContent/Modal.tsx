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
    if (heightImage > 0 && heightImage < 350) {
      return `${styles.mainWrapperStyle} mt-[325px] scale-[1.5]`
    }
    if (heightImage > 0 && heightImage > 350 && heightImage <= 450) {
      return `${styles.mainWrapperStyle} mt-[310px] scale-[1.5]`
    }
    if (heightImage > 0 && heightImage > 600 && heightImage < 700) {
      return `${styles.mainWrapperStyle} mt-[165px] scale-[1.4]`
    }
    else {
      return `${styles.mainWrapperStyle} mt-[115px] scale-[1.2]`
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
