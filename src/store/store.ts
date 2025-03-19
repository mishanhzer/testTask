import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, devtools } from "zustand/middleware"; // для связи с localStorage

import {
  dataWorks,
  TypesDataWorks,
} from "../assets/images/works/allWorks/AllWorks";

interface TypesStore {
  animalWorks: TypesDataWorks[]
  animalDisplayedData: TypesDataWorks[]
  animalVisibleData: number
  setAnimalVisibleData: () => void
  setAnimalDisplayedData: () => void
  funcForCall: () => void
  handleAnimalLoadMore: () => void
}

export const useAnimalStore = create<TypesStore>()(
  devtools(
    immer(
        (set) => ({
          animalWorks: dataWorks.filter(item => item.category === 'animal'),
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal').slice(0, 9),
          animalVisibleData: 9,
          funcForCall: () => {},
          setAnimalVisibleData: () => 
            set((state) => ({
              animalVisibleData: state.animalVisibleData + 9
            })),
          setAnimalDisplayedData: () => 
            set((state) => ({
              animalDisplayedData: dataWorks.filter(item => item.category === 'animal').slice(0, state.animalVisibleData)
            })),
          handleAnimalLoadMore: () => 
            set((state) => ({
              funcForCall: [state.setAnimalVisibleData(), state.setAnimalDisplayedData()]
            })),
        }),
    )
  )
);




// Cтарый код с persist
// export const useStore = create<TypesStore>()(
//   devtools(
//     immer(
//       persist(
//         (set) => ({
//           displayedData: dataWorks.filter(item => item.category === 'animal').slice(0, 9),
//           visibleData: 9,
//           setVisibleData: (prevCount) => 
//             set((state) => ({
//               visibleData: state.visibleData + 9
//             })),
//           setDisplayedData: () => 
//             set((state) => ({
//               displayedData: dataWorks.filter(item => item.category === 'animal').slice(0, state.visibleData)
//             }))
//         }),
//         {
//           // options (настройки storage)
//           name: "work-storage",
//         }
//       )
//     )
//   )
// );


