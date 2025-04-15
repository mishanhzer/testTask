import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, devtools, createJSONStorage } from "zustand/middleware"; // для связи с localStorage

import axios from "axios";

import { getData} from "../utils/useTest";

import {
  _transformAnimals,
  linkAnimals,
  linkFlowers,
  linkStillLife,
  linkPeopleAndAnimals,
} from '../utils/useTest'

import {
  dataWorksAnimals,
  dataWorksFlowers,
  dataWorksStillLife,
  dataWorksPeopleAndAnimals,
  TypesDataWorks,
} from "../assets/images/AllWorks"

// Cтор Animals
interface TypesAnimalsStore {
  // animalDisplayedData: TypesDataWorks[]

  animals: TypesDataWorks[]
  getAnimals: () => void
  response: number
  loadingTest: string
  setLoadingLoading: () => void
  setLoadingConfirmed: () => void
  setVisiblePage: () => void
  getAnimalsFirstPage: () => Promise<void>
  getAnimalsSecondPage: () => void
  getAnimalsThirdPage: () => void
  getAnimalsFourthPage: () => void
  getAnimalsFifthPage: () => void
  getAnimalsSixthPage: () => void
  getPrevAnimals: () => void

  setPrevPage: () => void
  setNextPage: () => void

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
      animals: [],
      response: 0,
      loadingTest: 'waiting',
      getAnimals: async () => {
        set({loadingTest: 'loading'})
        try {
          const res = await axios.get(`https://cloud-api.yandex.net/v1/disk/public/resources?public_key=${linkAnimals}&limit=100`)
          set({animals: res.data._embedded.items.map(_transformAnimals).slice(0, 9), response: res.status, loadingTest: 'confirmed'})
        } catch(e) {
          set({loadingTest: 'error'})
          throw(e)
        }
        },
      setLoadingLoading: () => set({loadingTest: 'loading'}),
      setLoadingConfirmed: () => set({loadingTest: 'confirmed'}),

      setVisiblePage: () => 
        set((state) => ({
          animals: state.animals.slice(0, 9),
        })),
      // animalDisplayedData: dataWorksAnimals.filter(item => item.id < 9),
      idStart: 0,
      idEnd: 9,
      paramsId: 0,

      getAnimalsFirstPage: () => getData(set, 0, 9),
      getAnimalsSecondPage: () => getData(set, 9, 18),  
      getAnimalsThirdPage: () => getData(set, 18, 27),
      getAnimalsFourthPage: () => getData(set, 27, 36),
      getAnimalsFifthPage: () => getData(set, 36, 45),
      getAnimalsSixthPage: () => getData(set, 45, 54),


      getPrevAnimals: async () => {
        set({loadingTest: 'loading'})
        try {
          const res = await axios.get(`https://cloud-api.yandex.net/v1/disk/public/resources?public_key=${linkAnimals}&limit=100`)
          set(state => ({animals: res.data._embedded.items.map(_transformAnimals).slice(state.idStart - 9, state.idEnd - 9), loadingTest: 'confirmed'}))
        } catch(e) {
          set({loadingTest: 'error'})
          throw(e)
        }
        },
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
      setVisibleDisplay: () => 
        set((state) => ({
          animals: state.animals.filter(item => item.id >= state.idStart && item.id < state.idEnd),
          // animalDisplayedData: dataWorksAnimals.filter(item => item.id >= state.idStart && item.id < state.idEnd),
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













