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
  id: number
  inStock?: boolean
  materials?: string
  name?: string
  nameImg?: string
  path?: string
  preview?: string
  salary: number
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

  getPictureCart: (picture: TypesPictureCart) => void
  getDeleteTest: (dataId: number) => void
  deleteDuplicatePicture: () => void
  getPicturesCart: () => void

  addInCart: boolean
  setAddInCart: (active: boolean) => void

  cart: any
  setCartTest: (cart: any) => void

  discount: boolean
  setDiscount: (bool: boolean) => void

  testData: TypesPictureCart[]
  setTestData: (data: TypesPictureCart[]) => void

  setNewData: (data: TypesPictureCart[]) => void

  isAddedToCart: {
    [key: number]: boolean
  }
  addProperty: (property: number, value: boolean) => void
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

      pictureCart: {},
      picturesCart: [],

      cart: [],

      addInCart: false,

      discount: false,

      testData: [],

      isAddedToCart: {},

      addProperty: (property: number, value: boolean) =>
        set((state) => ({ isAddedToCart: { ...state.isAddedToCart, [property]: value } })),


      setNewData: (data) => {
        set({testData: data})
      },

    
      setTestData: (data) => {
        set({testData: data})
      },

      setDiscount: (bool: boolean) => {
        set({discount: bool})
      },

      setCartTest: (cart) => {
        set({cart: cart})
      },

      setAddInCart: (active: boolean) => (
        set({addInCart: active})
      ),

      getPictureCart: (picture) => (
        set({pictureCart: picture})
      ),
      
      getPicturesCart: () => { // был баг, что picturesCart не определялся как массив и выдавал ошибку, что это не итерируемый обьект
        set((state => {
          if (Array.isArray(state.picturesCart)) {
            return { picturesCart: [...state.picturesCart, state.pictureCart].reverse() }
          } else {
            return { picturesCart: [state.pictureCart] }
          }
        }))
      },

      deleteDuplicatePicture: () => {
        set((state => ({picturesCart: state.picturesCart.filter((item: TypesPictureCart, i: number, self: TypesPictureCart[]) => i === self.findIndex((t) => t.id === item.id))})))
      },

      getDeleteTest: (dataId) => (
        set((state => ({
          picturesCart: state.picturesCart.filter(item => item.id !== dataId)
        })))
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
