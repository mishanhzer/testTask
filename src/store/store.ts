import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, devtools } from "zustand/middleware"; // для связи с localStorage

import {
  dataWorks,
  TypesDataWorks,
} from "../assets/images/works/allWorks/AllWorks";

interface TypesStore {
  // works: TypesDataWorks[]
  displayedData: TypesDataWorks[]
  visibleData: number
  setVisibleData: () => void
  setDisplayedData: () => void
}

console.log(dataWorks)

export const useStore = create<TypesStore>()(
  devtools(
    immer(
      persist(
        (set) => ({
          displayedData: dataWorks.filter(item => item.category === 'animal').slice(0, 9),
          visibleData: 9,
          setVisibleData: () => 
            set((state) => ({
              visibleData: state.visibleData + 9
            })),
          setDisplayedData: () => 
            set((state) => ({
              displayedData: dataWorks.filter(item => item.category === 'animal').slice(0, 27)
            }))
        }),
        {
          // options (настройки storage)
          name: "work-storage",
        }
      )
    )
  )
);

