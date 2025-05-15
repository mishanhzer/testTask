import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, devtools, createJSONStorage } from "zustand/middleware"; // для связи с localStorage

import axios from "axios";

import {
  _transform,
} from '../utils/useTest'

import {
  TypesDataWorks, TypesSizes
} from "../assets/images/Images"
import { number, string } from "yup";

interface TypesPictureCart {
  active?: boolean
  description?: string
  file?: string
  id?: number
  inStock?: boolean
  materials?: string
  name?: string
  nameImg?: string
  path?: string
  preview?: string
  salary?: number
  size?: string
  sizes?: TypesSizes[]
}

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

  pictureCart: any
  picturesCart: any
  amountPictures: number
  getPictureCart: (picture: TypesPictureCart) => void
  getDeleteTest: () => void
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

      amountPictures: 0,
      pictureCart: {},
      picturesCart: [],
      cleanCart: [],

      getAmountPictures: (pictures) => (
        set({amountPictures: pictures})
      ),

      getPictureCart: (picture) => (
        set({pictureCart: picture})
      ),
      getPicturesCart: () => {
        set((state => ({picturesCart: [...state.picturesCart, state.pictureCart]})))
      },

      deleteDuplicatePicture: () => {
        set((state => ({cleanCart: state.picturesCart.filter((item, i, self) => i === self.findIndex((t) => t.id === item.id))})))
      },

      getDeleteTest: (dataId) => (
        // set((state => ({cleanCart: state.picturesCart.filter()})))
        // set((state => ({cleanCart: state.cleanCart.filter(item => item.id !== dataId)})))
        set((state => ({cleanCart: state.cleanCart.filter(item => item.id !== dataId)})))
      ),

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
