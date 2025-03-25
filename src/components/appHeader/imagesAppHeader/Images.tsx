import vkImg from '../../../assets/logo/logoHeader/linkSocialMedia/vk.svg'
import instImg from '../../../assets/logo/logoHeader/linkSocialMedia/inst.png'
import liveImg from '../../../assets/logo/logoHeader/linkSocialMedia/live.png'

interface TypesLogo {
  name: string;
  src: string;
}

export const images: TypesLogo[] = [
  {
    name: "vkLogo",
    src: vkImg,
  },
  {
    name: "instLogo",
    src: instImg,
  },
  {
    name: "liveLogo",
    src: liveImg,
  },
];