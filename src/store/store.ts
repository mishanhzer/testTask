import {create} from 'zustand'

const useStore = create((set) => ({
  pictures: [ // значение по умолчанию
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Petya'}
  ],
  addTest: (picture) =>
    set((state) => ({
      pictures: [
        {name: picture.name, id: Math.random() * 100},
        ...state.pictures
      ]
    })),
    removeTest: (id) => 
      set((state) => ({
        pictures: state.pictures.filter((picture) => picture.id !== id),
      })),
}))