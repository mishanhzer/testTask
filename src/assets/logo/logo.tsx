import vkImg from './logoHeader/vk.svg'
import instImg from "./logoHeader/inst.png";
import liveImg from "./logoHeader/live.png";
import mainLogo from "./logoHeader/mainLogo.jpg";
import arrow from './logoHeader/arrow.png'

export { mainLogo, arrow };

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
