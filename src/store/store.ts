import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, devtools } from "zustand/middleware"; // для связи с localStorage

import {
  dataWorks,
  TypesDataWorks,
} from "../assets/images/works/allWorks/AllWorks";

interface TypesStore {
  animalWorks: TypesDataWorks[]
  // animalDisplayedDataPageOne: TypesDataWorks[]
  // animalDisplayedDataPageTwo: TypesDataWorks[]
  // animalDisplayedDataPageThree: TypesDataWorks[]
  // animalDisplayedDataPageFour: TypesDataWorks[]
  // animalDisplayedDataPageFive: TypesDataWorks[]
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
  setTestDisplay: () => void
  test: number
  test1: number
}

export const useAnimalStore = create<TypesStore>()(
  devtools(
    immer(
      (set) => ({
        animalWorks: dataWorks.filter(item => item.category === 'animal'),
        animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id < 9),
        animalVisibleData: 9,
        test: 0,
        test1: 9,
        funcForCall: () => {},
        setAnimalVisibleData: () => 
          set((state) => ({
            animalVisibleData: state.animalVisibleData + 9
          })),
        setAnimalDisplayedData: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id < state.animalVisibleData)
          })),
        handleAnimalLoadMore: () => 
          set((state) => ({
            funcForCall: [state.setAnimalVisibleData(), state.setAnimalDisplayedData()]
          })),

        setTestPrev: () => 
          set((state) => ({
            // animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id > 48),
            test: state.test - 9,
            test1: state.test1 - 9
          })),
        setTestNext: () => 
          set((state) => ({
            test: state.test + 9,
            test1: state.test1 + 9
          })),
        setTestOne: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 0 && item.id <= 8),
          })),
        setTestTwo: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 9 && item.id <= 17),
          })),
        setTestThree: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 18 && item.id <= 26),
          })),
        setTestFour: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 27 && item.id <= 35),
          })),
        setTestFive: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 36 && item.id <= 44),
          })),
        setTestSix: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 45 && item.id <= 48),
          })),
        setTestDisplay: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal').slice(state.test, state.test1)
            // animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= state.test && item.id < state.test1)
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


