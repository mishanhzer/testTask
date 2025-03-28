import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, devtools, createJSONStorage } from "zustand/middleware"; // для связи с localStorage

import {
  dataWorks,
  TypesDataWorks,
} from "../assets/images/AllWorks"

interface TypesAnimalsStore {
  animalWorks: TypesDataWorks[]
  animalDisplayedData: TypesDataWorks[]
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
  paramsId: number
  setTestDisplay: () => void
}


// export const useAnimalStore = create<TypesStore>()(
//   devtools(
//   immer(
//     (set) => ({
//       animalWorks: dataWorks.filter(item => item.category === 'animal'),
//       animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id < 9),
//       idStart: 0,
//       idEnd: 9,
//       funcForCall: () => {},
//       setAnimalVisibleData: () => 
//         set((state) => ({
//           idEnd: state.idEnd < 54 ? state.idEnd + 9 : state.idEnd
//         })),
//       setAnimalDisplayedData: () => 
//         set((state) => ({
//           animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= state.idStart && item.id < state.idEnd)
//         })),
//       handleAnimalLoadMore: () => 
//         set((state) => ({
//           funcForCall: [state.setAnimalVisibleData(), state.setAnimalDisplayedData()]
//         })),

//       setTestPrev: () => 
//         set((state) => ({
//           idStart: state.idStart - 9,
//           idEnd: state.idEnd - 9,
//         })),
//       setTestNext: () => 
//         set((state) => ({
//           idStart: state.idStart + 9,
//           idEnd: state.idEnd + 9
//         })),
//       setTestOne: () => 
//         set((state) => ({
//           idStart: 0,
//           idEnd: 9,
//           animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 0 && item.id <= 8),
//         })),
//       setTestTwo: () => 
//         set((state) => ({
//           idStart: 9,
//           idEnd: 18,
//           animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 9 && item.id <= 17),
//         })),
//       setTestThree: () => 
//         set((state) => ({
//           idStart: 18,
//           idEnd: 27,
//           animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 18 && item.id <= 26),
//         })),
//       setTestFour: () => 
//         set((state) => ({
//           idStart: 27,
//           idEnd: 36,
//           animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 27 && item.id <= 35),
//         })),
//       setTestFive: () => 
//         set((state) => ({
//           idStart: 36,
//           idEnd: 45,
//           animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 36 && item.id <= 44),
//         })),
//       setTestSix: () => 
//         set((state) => ({
//           idStart: 45,
//           idEnd: 54,
//           animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 45 && item.id <= 53),
//         })),
//       setTestDisplay: () => 
//         set((state) => ({
//           animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= state.idStart && item.id < state.idEnd),
//         }))
//     }),
//  )
//   )
// );

export const useAnimalStore = create<TypesAnimalsStore>()(
  devtools(
 persist(
  immer(
    (set) => ({
      animalWorks: dataWorks.filter(item => item.category === 'animal'),
      animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id < 9),
      idStart: 0,
      idEnd: 9,
      paramsId: 0,
      funcForCall: () => {},
      setAnimalVisibleData: () => 
        set((state) => ({
          idEnd: state.idEnd < 54 ? state.idEnd + 9 : state.idEnd
        })),
      setAnimalDisplayedData: () => 
        set((state) => ({
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
          paramsId: state.paramsId - 1
        })),
      setTestNext: () => 
        set((state) => ({
          idStart: state.idStart + 9,
          idEnd: state.idEnd + 9,
          paramsId: state.paramsId + 1
        })),
      setTestOne: () => 
        set(() => ({
          idStart: 0,
          idEnd: 9,
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 0 && item.id <= 8),
          paramsId: 1
        })),
      setTestTwo: () => 
        set(() => ({
          idStart: 9,
          idEnd: 18,
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 9 && item.id <= 17),
          paramsId: 2
        })),
      setTestThree: () => 
        set(() => ({
          idStart: 18,
          idEnd: 27,
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 18 && item.id <= 26),
          paramsId: 3
        })),
      setTestFour: () => 
        set(() => ({
          idStart: 27,
          idEnd: 36,
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 27 && item.id <= 35),
          paramsId: 4
        })),
      setTestFive: () => 
        set(() => ({
          idStart: 36,
          idEnd: 45,
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 36 && item.id <= 44),
          paramsId: 5
        })),
      setTestSix: () => 
        set(() => ({
          idStart: 45,
          idEnd: 54,
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 45 && item.id <= 53),
          paramsId: 6
        })),
      setTestDisplay: () => 
        set((state) => ({
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= state.idStart && item.id < state.idEnd),
        }))
    }),
  ),  {
    name: 'animal-storage',
    storage: createJSONStorage(() => localStorage)
  }
 )
  )
);


interface TypesPeopleAndAnimalsStore {
  peopleAndAnimalsWorks: TypesDataWorks[]
  peopleAndAnimalsDisplayedData: TypesDataWorks[]
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
  paramsId: number
  setTestDisplay: () => void
}

export const usePeopleAndAnimalsStore = create<TypesPeopleAndAnimalsStore>()(
  devtools(
 persist(
  immer(
    (set) => ({
      peopleAndAnimalsWorks: dataWorks.filter(item => item.category === 'peopleAndAnimals'),
      peopleAndAnimalsDisplayedData: dataWorks.filter(item => item.category === 'peopleAndAnimals' && item.id < 55),
      idStart: 48,
      idEnd: 55,
      paramsId: 0,
      funcForCall: () => {},


      setAnimalVisibleData: () => 
        set((state) => ({
          idEnd: state.idEnd < 54 ? state.idEnd + 9 : state.idEnd
        })),
      setAnimalDisplayedData: () => 
        set((state) => ({
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
          paramsId: state.paramsId - 1
        })),
      setTestNext: () => 
        set((state) => ({
          idStart: state.idStart + 9,
          idEnd: state.idEnd + 9,
          paramsId: state.paramsId + 1
        })),
      setTestOne: () => 
        set(() => ({
          idStart: 0,
          idEnd: 9,
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 0 && item.id <= 8),
          paramsId: 1
        })),
      setTestTwo: () => 
        set(() => ({
          idStart: 9,
          idEnd: 18,
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 9 && item.id <= 17),
          paramsId: 2
        })),
      setTestThree: () => 
        set(() => ({
          idStart: 18,
          idEnd: 27,
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 18 && item.id <= 26),
          paramsId: 3
        })),
      setTestFour: () => 
        set(() => ({
          idStart: 27,
          idEnd: 36,
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 27 && item.id <= 35),
          paramsId: 4
        })),
      setTestFive: () => 
        set(() => ({
          idStart: 36,
          idEnd: 45,
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 36 && item.id <= 44),
          paramsId: 5
        })),
      setTestSix: () => 
        set(() => ({
          idStart: 45,
          idEnd: 54,
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= 45 && item.id <= 53),
          paramsId: 6
        })),
      setTestDisplay: () => 
        set((state) => ({
          animalDisplayedData: dataWorks.filter(item => item.category === 'animal' && item.id >= state.idStart && item.id < state.idEnd),
        }))
    }),
  ),  {
    name: 'peopleAndAnimals-storage',
    storage: createJSONStorage(() => localStorage)
  }
 )
  )
);


