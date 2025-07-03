import React from 'react'

import aboutImage from '../../../assets/images/aboutImage/aboutPicture.jpg'
import styles from './about.module.scss'

export const AboutHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div>
          <img className={styles.mainImg} src={aboutImage} alt="" />
        </div>
        <div className={styles.wrapperContent}>
          <h2 className={styles.header}>About Elena Kozyutenko</h2>
          <div className={styles.subheader}>Contemporary Figurative Artist</div>
          <div className={styles.description}>"I am a contemporary artist focusing on <strong>figurative oil paintings on wood</strong>. My work is inspired by the interplay of <strong>textures, light, and human emotion</strong>, exploring the contrasts of <span>strength and vulnerability</span> through expressive and intimate compositions. <br /><br />

            Using flowing fabrics, rich details, and a balance of bold and delicate brushstrokes, my paintings tell stories that invite viewers to connect with their own emotions and experiences. <br /><br />

            Each piece reflects my passion for <strong>narrative art</strong> and my dedication to creating works that resonate on a personal and universal level. Whether it’s a quiet moment or a bold statement, my art seeks to inspire curiosity and dialogue."</div>
        </div>
      </div>
    </div>
  )
}