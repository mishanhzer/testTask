import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, devtools, createJSONStorage } from "zustand/middleware"; // для связи с localStorage

import axios from "axios";

import {
  _transform,
} from '../utils/useTest'

export const useStore = create()(
  devtools(
 persist(
  immer(
    (set) => ({
      years4: [2015, 2016, 2017, 2018, 2019, 2020],
      text4: [
        '13 сентября - частное солнечное затмение, видимо в Южной Африке и части Антарктиды',
        'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
        'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
        'Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца',
        'Google обьявил о создании 53-кубитного квантового компьютера.',
        'Корабль Crew Dragon вернулся на Землю из первого пилотируемого полета',
      ],

      offsetAllWorks: 0,

  //     getDeleteTest: () => (
  //     set((state => ({
  //       picturesCart: state.picturesCart.filter(item => item.id !== dataId)
  //   })))
  // ),

    }),
  ), {
    name: 'main-storage',
    storage: createJSONStorage(() => localStorage)
  }
 )
  )
);



// interface TypesPictureCart {

// }

// interface TypesStore {

// }

// export const useStore = create<TypesStore>()(
//   devtools(
//  persist(
//   immer(
//     (set) => ({
//       stillLife: [],
//       loading: 'waiting',
//       offsetAllWorks: 0,
     
//       setCartActiveItems: (cart) => (
//         set({testCart: cart})
//       ),

  
//       getPicturesCart: () => { // был баг, что picturesCart не определялся как массив и выдавал ошибку, что это не итерируемый обьект
//         set((state => {
//           if (Array.isArray(state.picturesCart)) {
//             return { picturesCart: [...state.picturesCart, state.pictureCart].reverse() }
//           } else {
//             return { picturesCart: [state.pictureCart] }
//           }
//         }))
//       },


//       getDeleteTest: (dataId) => (
//         set((state => ({
//           picturesCart: state.picturesCart.filter(item => item.id !== dataId)
//         })))
//       ),
//     }),
//   ), {
//     name: 'main-storage',
//     storage: createJSONStorage(() => localStorage)
//   }
//  )
//   )
// );
