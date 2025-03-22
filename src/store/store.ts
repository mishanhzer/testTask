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

  setTestNext: () => void
  setTestPrev: () => void
  setTestOne: () => void
  setTestTwo: () => void
  setTestThree: () => void
  setTestFour: () => void
  setTestFive: () => void
  setTestSix: () => void
  idStart: number
  idEnd: number
  setTestDisplay: () => void
}

export const useAnimalStore = create<TypesStore>()(
  devtools(
    immer(
      (set) => ({
        animalWorks: dataWorks.filter(item => item.category === 'animal'),
        animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id < 9),
        animalVisibleData: 9,
        idStart: 0,
        idEnd: 9,
        funcForCall: () => {},
        setAnimalVisibleData: () => 
          set((state) => ({
            // animalVisibleData: state.animalVisibleData + 9,
            idEnd: state.idEnd + 9
          })),
        setAnimalDisplayedData: () => 
          set((state) => ({
            // animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id < state.animalVisibleData)
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= state.idStart && item.id < state.idEnd)
          })),
        handleAnimalLoadMore: () => 
          set((state) => ({
            funcForCall: [state.setAnimalVisibleData(), state.setAnimalDisplayedData()]
          })),

        setTestPrev: () => 
          set((state) => ({
            idStart: state.idStart - 9,
            idEnd: state.idEnd - 9,
          })),
        setTestNext: () => 
          set((state) => ({
            idStart: state.idStart + 9,
            idEnd: state.idEnd + 9
          })),
        setTestOne: () => 
          set((state) => ({
            idStart: 0,
            idEnd: 9,
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 0 && item.id <= 8),
          })),
        setTestTwo: () => 
          set((state) => ({
            idStart: 9,
            idEnd: 18,
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 9 && item.id <= 17),
          })),
        setTestThree: () => 
          set((state) => ({
            idStart: 18,
            idEnd: 27,
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 18 && item.id <= 26),
          })),
        setTestFour: () => 
          set((state) => ({
            idStart: 27,
            idEnd: 36,
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 27 && item.id <= 35),
          })),
        setTestFive: () => 
          set((state) => ({
            idStart: 36,
            idEnd: 45,
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 36 && item.id <= 44),
          })),
        setTestSix: () => 
          set((state) => ({
            idStart: 45,
            idEnd: 54,
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 45 && item.id <= 53),
          })),
        setTestDisplay: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id > state.idStart && item.id <= state.idEnd),
          }))
      }),
    ),
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


