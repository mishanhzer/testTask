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
