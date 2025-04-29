import React from "react"
import useStore from '../../../store/store'
import aboutImage from '../../../assets/images/aboutImage/aboutPicture.jpg'

const About = () => {
  return (
    <div className={`bg-[#edeef0] w-screen`}>
      <div className={`pt-[50px] flex justify-center`}>
        <div>
          <img className={`max-w-[550px] max-h-[820px]`} src={aboutImage} alt="" />
        </div>
        <div className="w-[550px] ml-[6%] self-center">
          <h2 className={`text-[45px] pb-[4%]`}>About Elena Kozyutenko</h2>
          <div className={`text-[#777777] text-[13px] leading-[1.8em] pb-[2%]`}>Contemporary Figurative Artist</div>
          <div className={`text-[#777777] text-[18px] leading-[1.8em] font-normal`}>"I am a contemporary artist focusing on <strong>figurative oil paintings on wood</strong>. My work is inspired by the interplay of <strong>textures, light, and human emotion</strong>, exploring the contrasts of <span>strength and vulnerability</span> through expressive and intimate compositions. <br /><br />

            Using flowing fabrics, rich details, and a balance of bold and delicate brushstrokes, my paintings tell stories that invite viewers to connect with their own emotions and experiences. <br /><br />

            Each piece reflects my passion for <strong>narrative art</strong> and my dedication to creating works that resonate on a personal and universal level. Whether it’s a quiet moment or a bold statement, my art seeks to inspire curiosity and dialogue."</div>
        </div>
      </div>
      <div className={`mt-[50px]`}>
        <div>Latest works</div>
        <div>

        </div>
      </div>
    </div>
  )
}

const LastWorks = () => {
  const getData = useStore(state => state.getData)
  return (

  )
}

export default About