import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, devtools, createJSONStorage } from "zustand/middleware"; // для связи с localStorage

import axios from "axios";

import {
  _transform,
} from '../utils/useTest'

import {
  TypesDataWorks,
} from "../assets/images/Images"

interface TypesStore {
  works: TypesDataWorks[]
  animals: TypesDataWorks[]
  flowers: TypesDataWorks[]
  stillLife: TypesDataWorks[]
  peopleAndAnimals: TypesDataWorks[]
  loading: string
  getData: (category: string, url: string, offsetName: string, offset: number, pageName: string, page?: number) => void
  offsetAllWorks: number
  offsetAnimals: number
  offsetFlowers: number
  offsetStillLife: number
  offsetPeopleAndAnimals: number
  pageAllWorks: number
  pageAnimals: number
  pageFlowers: number
  pageStillLife: number
  pagePeopleAndAnimals: number
}

export const useStore = create<TypesStore>()(
  devtools(
 persist(
  immer(
    (set) => ({
      works: [],
      animals: [],
      flowers: [],
      stillLife: [],
      peopleAndAnimals: [],
      loading: 'waiting',
      offsetAllWorks: 0,
      offsetAnimals: 0,
      offsetFlowers: 0,
      offsetStillLife: 0,
      offsetPeopleAndAnimals: 0,
      pageAllWorks: 0,
      pageAnimals: 1,
      pageFlowers: 1,
      pageStillLife: 1,
      pagePeopleAndAnimals: 1,
      getData: async (category, url, offsetName, offset, pageName, page) => {
        set({loading: 'loading'})
        try {
          const res = await axios.get(`${url}&offset=${offset}`)
          set(({[category]: res.data._embedded.items.map(_transform), loading: 'confirmed', [offsetName]: offset, [pageName]: page}))
        } catch(e) {
          set({loading: 'error'})
          throw(e)
        }
        },
    }),
  ), {
    name: 'main-storage',
    storage: createJSONStorage(() => localStorage)
  }
 )
  )
);
