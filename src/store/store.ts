import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, devtools, createJSONStorage } from "zustand/middleware"; // для связи с localStorage

import axios from "axios";

import { getData, urlFlowers } from "../utils/useTest";

import {
  _transform,
} from '../utils/useTest'

import {
  TypesDataWorks,
} from "../assets/images/AllWorks"


interface TypesStore {
  animals: TypesDataWorks[]
  flowers: TypesDataWorks[]
  stillLife: TypesDataWorks[]
  peopleAndAnimals: TypesDataWorks[]
  loading: string
  getData: (cateogry: string, url: string, offsetName: string, offset: number, pageName: string, page?: number) => void
  offsetAnimals: number
  offsetFlowers: number
  offsetStillLife: number
  offsetPeopleAndAnimals: number
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
      animals: [],
      flowers: [],
      stillLife: [],
      peopleAndAnimals: [],
      loading: 'waiting',
      offsetAnimals: 0,
      offsetFlowers: 0,
      offsetStillLife: 0,
      offsetPeopleAndAnimals: 0,
      pageAnimals: 1,
      pageFlowers: 1,
      pageStillLife: 1,
      pagePeopleAndAnimals: 1,
      getData: async (category, url, offsetName, offset = 0, pageName, page = 1) => {
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
