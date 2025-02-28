import vkImg from "./vk.svg";
import instImg from "./inst.png";
import liveImg from "./live.png";
import mainLogo from "./mainLogo.jpg";
import basket from "./basket.png";
import arrow from './arrow.png'

export { mainLogo, basket, arrow };

interface Test {
  name: string;
  src: string;
}

export const images: Test[] = [
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
