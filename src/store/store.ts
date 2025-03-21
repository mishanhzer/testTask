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
  setTestDisplayTest: () => void
  setTestDisplayTestik: () => void
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
        // setAnimalDisplayedData: () => 
        //   set((state) => ({
        //     animalDisplayedData: dataWorks.filter(item => item.category === 'animal').slice(0, state.animalVisibleData)
        //   })),
        handleAnimalLoadMore: () => 
          set((state) => ({
            funcForCall: [state.setAnimalVisibleData(), state.setAnimalDisplayedData()]
          })),

        setTestPrev: () => 
          set((state) => ({
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
            test: 0,
            test1: 9
          })),
        setTestTwo: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 9 && item.id <= 17),
            test: 9,
            test1: 18
          })),
        setTestThree: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 18 && item.id <= 26),
            test: 18,
            test1: 27
          })),
        setTestFour: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id > 18 && item.id < 27),
            test: 27,
            test1: 36
          })),
        setTestFive: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id > 18 && item.id < 27),
            test: 36,
            test1: 45
          })),
        setTestSix: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id > 18 && item.id < 27),
            test: 45,
            test1: 48
          })),
        setTestDisplay: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal').slice(state.test, state.test1)
          })),
          
        // setTestDisplayTest: () => 
        //   set((state) => ({
        //     animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id > 9)
        // })),

        // setTestDisplayTestik: () => 
        //   set((state) => ({
        //     animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id > 48)
        // })),

        setTestDisplayTest: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal').slice(0, 9)
        })),

        setTestDisplayTestik: () => 
          set((state) => ({
            animalDisplayedData: dataWorks.filter(item => item.category === 'animal').slice(45, 48)
        })),
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


