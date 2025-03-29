import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, devtools, createJSONStorage } from "zustand/middleware"; // для связи с localStorage

import {
  // dataWorks,
  dataWorksAnimals,
  dataWorksFlowers,
  dataWorksStillLife,
  dataWorksPeopleAndAnimals,
  TypesDataWorks,
} from "../assets/images/AllWorks"

// Cтор Animals
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

export const useAnimalStore = create<TypesAnimalsStore>()(
  devtools(
 persist(
  immer(
    (set) => ({
      animalWorks: dataWorksAnimals.filter(item => item.category === 'animal'),
      animalDisplayedData: dataWorksAnimals.filter(item => item.category === 'animal' && item.id < 9),
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
          animalDisplayedData: dataWorksAnimals.filter(item => item.category === 'animal' && item.id >= state.idStart && item.id < state.idEnd)
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
          animalDisplayedData: dataWorksAnimals.filter(item => item.category === 'animal' && item.id >= 0 && item.id <= 8),
          paramsId: 1
        })),
      setTestTwo: () => 
        set(() => ({
          idStart: 9,
          idEnd: 18,
          animalDisplayedData: dataWorksAnimals.filter(item => item.category === 'animal' && item.id >= 9 && item.id <= 17),
          paramsId: 2
        })),
      setTestThree: () => 
        set(() => ({
          idStart: 18,
          idEnd: 27,
          animalDisplayedData: dataWorksAnimals.filter(item => item.category === 'animal' && item.id >= 18 && item.id <= 26),
          paramsId: 3
        })),
      setTestFour: () => 
        set(() => ({
          idStart: 27,
          idEnd: 36,
          animalDisplayedData: dataWorksAnimals.filter(item => item.category === 'animal' && item.id >= 27 && item.id <= 35),
          paramsId: 4
        })),
      setTestFive: () => 
        set(() => ({
          idStart: 36,
          idEnd: 45,
          animalDisplayedData: dataWorksAnimals.filter(item => item.category === 'animal' && item.id >= 36 && item.id <= 44),
          paramsId: 5
        })),
      setTestSix: () => 
        set(() => ({
          idStart: 45,
          idEnd: 54,
          animalDisplayedData: dataWorksAnimals.filter(item => item.category === 'animal' && item.id >= 45 && item.id <= 53),
          paramsId: 6
        })),
      setTestDisplay: () => 
        set((state) => ({
          animalDisplayedData: dataWorksAnimals.filter(item => item.category === 'animal' && item.id >= state.idStart && item.id < state.idEnd),
        }))
    }),
  ),  {
    name: 'animal-storage',
    storage: createJSONStorage(() => localStorage)
  }
 )
  )
);

// Cтор People and Animals
interface TypesPeopleAndAnimalsStore {
  peopleAndAnimalsWorks: TypesDataWorks[]
  peopleAndAnimalsDisplayedData: TypesDataWorks[]

  setTestNext: () => void
  setTestPrev: () => void
  setTestOne: () => void
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
      peopleAndAnimalsWorks: dataWorksPeopleAndAnimals.filter(item => item.category === 'peopleAndAnimals'),
      peopleAndAnimalsDisplayedData: dataWorksPeopleAndAnimals.filter(item => item.category === 'peopleAndAnimals' && item.id <= 8),
      idStart: 48,
      idEnd: 55,
      paramsId: 0,
      funcForCall: () => {},

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
          animalDisplayedData: dataWorksPeopleAndAnimals.filter(item => item.category === 'animal' && item.id >= 0 && item.id <= 8),
          paramsId: 1
        })),
      setTestDisplay: () => 
        set((state) => ({
          animalDisplayedData: dataWorksPeopleAndAnimals.filter(item => item.category === 'animal' && item.id >= state.idStart && item.id < state.idEnd),
        }))
    }),
  ),  {
    name: 'peopleAndAnimals-storage',
    storage: createJSONStorage(() => localStorage)
  }
 )
  )
);




// Cтор Flowers
interface TypesFlowersStore {
  flowersWorks: TypesDataWorks[]
  flowersWorksDisplayedData: TypesDataWorks[]
  setTestNext: () => void
  setTestPrev: () => void
  setTestOne: () => void
  setTestTwo: () => void
  setTestThree: () => void
  idStart: number
  idEnd: number
  paramsFlowersId: number
  setTestDisplay: () => void
}

export const useFlowersStore = create<TypesFlowersStore>()(
  devtools(
 persist(
  immer(
    (set) => ({
      flowersWorks: dataWorksFlowers.filter(item => item.category === 'flowers'),
      flowersWorksDisplayedData: dataWorksFlowers.filter(item => item.category === 'flowers' && item.id < 9),
      idStart: 0,
      idEnd: 9,
      paramsFlowersId: 0,

      setTestPrev: () => 
        set((state) => ({
          idStart: state.idStart - 9,
          idEnd: state.idEnd - 9,
          paramsFlowersId: state.paramsFlowersId - 1
        })),
      setTestNext: () => 
        set((state) => ({
          idStart: state.idStart + 9,
          idEnd: state.idEnd + 9,
          paramsFlowersId: state.paramsFlowersId + 1
        })),
      setTestOne: () => 
        set(() => ({
          idStart: 0,
          idEnd: 9,
          flowersWorksDisplayedData: dataWorksFlowers.filter(item => item.category === 'flowers' && item.id >= 0 && item.id <= 8),
          paramsFlowersId: 1
        })),
      setTestTwo: () => 
        set(() => ({
          idStart: 9,
          idEnd: 18,
          flowersWorksDisplayedData: dataWorksFlowers.filter(item => item.category === 'flowers' && item.id >= 9 && item.id <= 17),
          paramsFlowersId: 2
        })),
      setTestThree: () => 
        set(() => ({
          idStart: 18,
          idEnd: 27,
          flowersWorksDisplayedData: dataWorksFlowers.filter(item => item.category === 'flowers' && item.id >= 18 && item.id <= 26),
          paramsFlowersId: 3
        })),
      setTestDisplay: () => 
        set((state) => ({
          flowersWorksDisplayedData: dataWorksFlowers.filter(item => item.category === 'flowers' && item.id >= state.idStart && item.id < state.idEnd),
        }))
    }),
  ),  {
    name: 'flowers-storage',
    storage: createJSONStorage(() => localStorage)
  }
 )
  )
);






// Стор StillLife
interface TypesStillLifeStore {
  stillLifeWorks: TypesDataWorks[]
  stillLifeWorksDisplayedData: TypesDataWorks[]
  setTestNext: () => void
  setTestPrev: () => void
  setTestOne: () => void
  setTestTwo: () => void
  idStart: number
  idEnd: number
  paramsStillLifeId: number
  setTestDisplay: () => void
}


export const useStillLifeStore = create<TypesStillLifeStore>()(
  devtools(
 persist(
  immer(
    (set) => ({
      stillLifeWorks: dataWorksStillLife.filter(item => item.category === 'stillLife'),
      stillLifeWorksDisplayedData: dataWorksStillLife.filter(item => item.category === 'stillLife' && item.id < 9),
      idStart: 0,
      idEnd: 9,
      paramsStillLifeId: 0,

      setTestPrev: () => 
        set((state) => ({
          idStart: state.idStart - 9,
          idEnd: state.idEnd - 9,
          paramsStillLifeId: state.paramsStillLifeId - 1
        })),
      setTestNext: () => 
        set((state) => ({
          idStart: state.idStart + 9,
          idEnd: state.idEnd + 9,
          paramsStillLifeId: state.paramsStillLifeId + 1
        })),
      setTestOne: () => 
        set(() => ({
          idStart: 0,
          idEnd: 9,
          stillLifeWorksDisplayedData: dataWorksStillLife.filter(item => item.category === 'stillLife' && item.id >= 0 && item.id <= 8),
          paramsStillLifeId: 1
        })),
      setTestTwo: () => 
        set(() => ({
          idStart: 9,
          idEnd: 18,
          stillLifeWorksDisplayedData: dataWorksStillLife.filter(item => item.category === 'stillLife' && item.id >= 9 && item.id <= 17),
          paramsStillLifeId: 2
        })),
      setTestDisplay: () => 
        set((state) => ({
          stillLifeWorksDisplayedData: dataWorksStillLife.filter(item => item.category === 'stillLife' && item.id >= state.idStart && item.id < state.idEnd),
        }))
    }),
  ),  {
    name: 'stillLife-storage',
    storage: createJSONStorage(() => localStorage)
  }
 )
  )
);









