import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, devtools, createJSONStorage } from "zustand/middleware"; // для связи с localStorage

import axios from "axios";

import { getData, getPrevAnimals, urlAnimals, urlFlowers } from "../utils/useTest";

import {
  _transform,
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
  animals: TypesDataWorks[]
  loadingTest: string
  setVisiblePage: () => void
  getAnimalsFirstPage: () => Promise<void>
  getAnimalsSecondPage: () => void
  getAnimalsThirdPage: () => void
  getAnimalsFourthPage: () => void
  getAnimalsFifthPage: () => void
  getAnimalsSixthPage: () => void
  getPrevAnimals: () => void
  getNextAnimals: () => void

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
      loadingTest: 'waiting',
      setVisiblePage: () => 
        set((state) => ({
          animals: state.animals.slice(0, 9),
        })),
      idStart: 0,
      idEnd: 9,
      paramsId: 0,

      getAnimalsFirstPage: () => getData(set, 0, 9, 1, urlAnimals, 'animals'),
      getAnimalsSecondPage: () => getData(set, 9, 18, 2, urlAnimals, 'animals'),
      getAnimalsThirdPage: () => getData(set, 18, 27, 3, urlAnimals, 'animals'),
      getAnimalsFourthPage: () => getData(set, 27, 36, 4, urlAnimals, 'animals'),
      getAnimalsFifthPage: () => getData(set, 36, 45, 5, urlAnimals, 'animals'),
      getAnimalsSixthPage: () => getData(set, 45, 54, 6, urlAnimals, 'animals'),

      getPrevAnimals: async () => {
        set({loadingTest: 'loading'})
        set((state) => ({
          idStart: state.idStart - 9,
          idEnd: state.idEnd - 9,
          paramsId: state.paramsId - 1
        }))
        try {
          const res = await axios.get(urlAnimals)
          set(state => ({animals: res.data._embedded.items.map(_transform).slice(state.idStart, state.idEnd), loadingTest: 'confirmed'}))
        } catch(e) {
          set({loadingTest: 'error'})
          throw(e)
        }
        },

      getNextAnimals: async () => {
        set({loadingTest: 'loading'})
        set((state) => ({
          idStart: state.idStart + 9,
          idEnd: state.idEnd + 9,
          paramsId: state.paramsId + 1
        }))
        try {
          const res = await axios.get(urlAnimals)
          set(state => ({animals: res.data._embedded.items.map(_transform).slice(state.idStart, state.idEnd), loadingTest: 'confirmed'}))
        } catch(e) {
          set({loadingTest: 'error'})
          throw(e)
        }
        },

      
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
  flowers: TypesDataWorks[]
  loadingTest: string
  getFlowersFirstPage: () => void
  getFlowersSecondPage: () => void
  getFlowersThirdPage: () => void
  getFlowersFourthPage: () => void
  getPrevFlowers: () => void
  getNextFlowers: () => void

  idStart: number
  idEnd: number
  paramsId: number
  setVisibleDisplay: () => void
}

export const useFlowersStore = create<TypesFlowersStore>()(
  devtools(
 persist(
  immer(
    (set) => ({
      flowers: [],
      loadingTest: 'waiting',
      idStart: 0,
      idEnd: 9,
      paramsId: 0,

      getFlowersFirstPage: () => getData(set, 0, 9, 1, urlFlowers, 'flowers'),
      getFlowersSecondPage: () => getData(set, 9, 18, 2, urlFlowers, 'flowers'),
      getFlowersThirdPage: () => getData(set, 18, 27, 3, urlFlowers, 'flowers'),
      getFlowersFourthPage: () => getData(set, 27, 36, 4, urlFlowers, 'flowers'),

      getPrevFlowers: async () => {
        set({loadingTest: 'loading'})
        set((state) => ({
          idStart: state.idStart - 9,
          idEnd: state.idEnd - 9,
          paramsId: state.paramsId - 1
        }))
        try {
          const res = await axios.get(urlFlowers)
          set(state => ({flowers: res.data._embedded.items.map(_transform).slice(state.idStart, state.idEnd), loadingTest: 'confirmed'}))
        } catch(e) {
          set({loadingTest: 'error'})
          throw(e)
        }
        },

      getNextFlowers: async () => {
        set({loadingTest: 'loading'})
        set((state) => ({
          idStart: state.idStart + 9,
          idEnd: state.idEnd + 9,
          paramsId: state.paramsId + 1
        }))
        try {
          const res = await axios.get(urlFlowers)
          set(state => ({flowers: res.data._embedded.items.map(_transform).slice(state.idStart, state.idEnd), loadingTest: 'confirmed'}))
        } catch(e) {
          set({loadingTest: 'error'})
          throw(e)
        }
        },

      setVisibleDisplay: () => 
        set((state) => ({
          flowers: state.flowers.filter(item => item.id >= state.idStart && item.id < state.idEnd),
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













