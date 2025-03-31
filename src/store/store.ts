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
  animalDisplayedData: TypesDataWorks[]

  setPrevPage: () => void
  setNextPage: () => void

  setOnePage: () => void
  setTwoPage: () => void
  setThreePage: () => void
  setFourPage: () => void
  setFivePage: () => void
  setSixPage: () => void
  idStart: number
  idEnd: number
  paramsId: number
  setVisibleDisplay: () => void
}

export const useAnimalStore = create<TypesAnimalsStore>()(
  devtools(
 persist(
  immer(
    (set) => ({
      animalDisplayedData: dataWorksAnimals.filter(item => item.id < 9),
      idStart: 0,
      idEnd: 9,
      paramsId: 0,

      setPrevPage: () => 
        set((state) => ({
          idStart: state.idStart - 9,
          idEnd: state.idEnd - 9,
          paramsId: state.paramsId - 1
        })),
      setNextPage: () => 
        set((state) => ({
          idStart: state.idStart + 9,
          idEnd: state.idEnd + 9,
          paramsId: state.paramsId + 1
        })),
      setOnePage: () => 
        set(() => ({
          idStart: 0,
          idEnd: 9,
          animalDisplayedData: dataWorksAnimals.filter(item => item.id >= 0 && item.id <= 8),
          paramsId: 1
        })),
      setTwoPage: () => 
        set(() => ({
          idStart: 9,
          idEnd: 18,
          animalDisplayedData: dataWorksAnimals.filter(item => item.id >= 9 && item.id <= 17),
          paramsId: 2
        })),
      setThreePage: () => 
        set(() => ({
          idStart: 18,
          idEnd: 27,
          animalDisplayedData: dataWorksAnimals.filter(item => item.id >= 18 && item.id <= 26),
          paramsId: 3
        })),
      setFourPage: () => 
        set(() => ({
          idStart: 27,
          idEnd: 36,
          animalDisplayedData: dataWorksAnimals.filter(item => item.id >= 27 && item.id <= 35),
          paramsId: 4
        })),
      setFivePage: () => 
        set(() => ({
          idStart: 36,
          idEnd: 45,
          animalDisplayedData: dataWorksAnimals.filter(item => item.id >= 36 && item.id <= 44),
          paramsId: 5
        })),
      setSixPage: () => 
        set(() => ({
          idStart: 45,
          idEnd: 54,
          animalDisplayedData: dataWorksAnimals.filter(item => item.id >= 45 && item.id <= 53),
          paramsId: 6
        })),
      setVisibleDisplay: () => 
        set((state) => ({
          animalDisplayedData: dataWorksAnimals.filter(item => item.id >= state.idStart && item.id < state.idEnd),
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
  peopleAndAnimalsDisplayedData: TypesDataWorks[]

  setNextPage: () => void
  setPrevPage: () => void
  setOnePage: () => void
  idStart: number
  idEnd: number
  paramsId: number
  setVisibleDisplay: () => void
}

export const usePeopleAndAnimalsStore = create<TypesPeopleAndAnimalsStore>()(
  devtools(
 persist(
  immer(
    (set) => ({
      peopleAndAnimalsDisplayedData: dataWorksPeopleAndAnimals.filter(item => item.id <= 8),
      idStart: 0,
      idEnd: 9,
      paramsId: 0,
      setPrevPage: () => 
        set((state) => ({
          idStart: state.idStart - 9,
          idEnd: state.idEnd - 9,
          paramsId: state.paramsId - 1
        })),
      setNextPage: () => 
        set((state) => ({
          idStart: state.idStart + 9,
          idEnd: state.idEnd + 9,
          paramsId: state.paramsId + 1
        })),
      setOnePage: () => 
        set(() => ({
          idStart: 0,
          idEnd: 9,
          peopleAndAnimalsDisplayedData: dataWorksPeopleAndAnimals.filter(item => item.id >= 0 && item.id <= 8),
          paramsId: 1
        })),
      setVisibleDisplay: () => 
        set((state) => ({
          peopleAndAnimalsDisplayedData: dataWorksPeopleAndAnimals.filter(item => item.id >= state.idStart && item.id < state.idEnd),
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
  flowersWorksDisplayedData: TypesDataWorks[]

  setNextPage: () => void
  setPrevPage: () => void
  setOnePage: () => void
  setTwoPage: () => void
  setThreePage: () => void
  idStart: number
  idEnd: number
  paramsFlowersId: number
  setVisibleDisplay: () => void
}

export const useFlowersStore = create<TypesFlowersStore>()(
  devtools(
 persist(
  immer(
    (set) => ({
      flowersWorksDisplayedData: dataWorksFlowers.filter(item => item.id < 9),
      idStart: 0,
      idEnd: 9,
      paramsFlowersId: 0,

      setPrevPage: () => 
        set((state) => ({
          idStart: state.idStart - 9,
          idEnd: state.idEnd - 9,
          paramsFlowersId: state.paramsFlowersId - 1
        })),
      setNextPage: () => 
        set((state) => ({
          idStart: state.idStart + 9,
          idEnd: state.idEnd + 9,
          paramsFlowersId: state.paramsFlowersId + 1
        })),
      setOnePage: () => 
        set(() => ({
          idStart: 0,
          idEnd: 9,
          flowersWorksDisplayedData: dataWorksFlowers.filter(item => item.id >= 0 && item.id <= 8),
          paramsFlowersId: 1
        })),
      setTwoPage: () => 
        set(() => ({
          idStart: 9,
          idEnd: 18,
          flowersWorksDisplayedData: dataWorksFlowers.filter(item => item.id >= 9 && item.id <= 17),
          paramsFlowersId: 2
        })),
      setThreePage: () => 
        set(() => ({
          idStart: 18,
          idEnd: 27,
          flowersWorksDisplayedData: dataWorksFlowers.filter(item => item.id >= 18 && item.id <= 26),
          paramsFlowersId: 3
        })),
      setVisibleDisplay: () => 
        set((state) => ({
          flowersWorksDisplayedData: dataWorksFlowers.filter(item => item.id >= state.idStart && item.id < state.idEnd),
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
  stillLifeWorksDisplayedData: TypesDataWorks[]
  setNextPage: () => void
  setPrevPage: () => void
  setOnePage: () => void
  setTwoPage: () => void
  idStart: number
  idEnd: number
  paramsStillLifeId: number
  setVisibleDisplay: () => void
}

export const useStillLifeStore = create<TypesStillLifeStore>()(
  devtools(
 persist(
  immer(
    (set) => ({
      stillLifeWorksDisplayedData: dataWorksStillLife.filter(item => item.id < 9),
      idStart: 0,
      idEnd: 9,
      paramsStillLifeId: 0,

      setPrevPage: () => 
        set((state) => ({
          idStart: state.idStart - 9,
          idEnd: state.idEnd - 9,
          paramsStillLifeId: state.paramsStillLifeId - 1
        })),
      setNextPage: () => 
        set((state) => ({
          idStart: state.idStart + 9,
          idEnd: state.idEnd + 9,
          paramsStillLifeId: state.paramsStillLifeId + 1
        })),
      setOnePage: () => 
        set(() => ({
          idStart: 0,
          idEnd: 9,
          stillLifeWorksDisplayedData: dataWorksStillLife.filter(item => item.id >= 0 && item.id <= 8),
          paramsStillLifeId: 1
        })),
      setTwoPage: () => 
        set(() => ({
          idStart: 9,
          idEnd: 18,
          stillLifeWorksDisplayedData: dataWorksStillLife.filter(item => item.id >= 9 && item.id <= 17),
          paramsStillLifeId: 2
        })),
      setVisibleDisplay: () => 
        set((state) => ({
          stillLifeWorksDisplayedData: dataWorksStillLife.filter(item => item.id >= state.idStart && item.id < state.idEnd),
        }))
    }),
  ),  {
    name: 'stillLife-storage',
    storage: createJSONStorage(() => localStorage)
  }
 )
  )
);













