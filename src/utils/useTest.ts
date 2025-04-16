import axios from "axios"

export const linkAnimals: string = 'https://disk.yandex.ru/d/K4E-ldU2sp1VbQ'
export const linkFlowers: string = 'https://disk.yandex.ru/d/59Fax6UsF26zww'
export const linkStillLife: string = 'https://disk.yandex.ru/d/5yEFzsxVPTdx7A'
export const linkPeopleAndAnimals: string = 'https://disk.yandex.ru/d/a7CJ9FA93iy7OA'
const _apiUrl = 'https://cloud-api.yandex.net/v1/disk/public/resources?public_key='
export let id = 0;

export const urlAnimals = `${_apiUrl}${linkAnimals}&limit=100`
export const urlFlowers = `${_apiUrl}${linkFlowers}&limit=100`


export const getData = async (set, startNumber: number, endNumber: number, params: number, url: string, category: string) => {
  set({loadingTest: 'loading'})
  try {
    const res = await axios.get(url)
    set({[category]: res.data._embedded.items.map(_transform).slice(startNumber, endNumber), response: res.status, loadingTest: 'confirmed', idStart: startNumber, idEnd: endNumber, paramsId: params})
  } catch(e) {
    set({loadingTest: 'error'})
    throw(e)
  }
  }

  export const _transform = (item: any) => {  
    return {
      file: item.file,
      preview: item.preview,
      name: item.name,
      path: item.path,
      sizes: item.sizes,
    }
  }
  

  // const tryPrev = async (set, state) => {
  //   try {
  //     const res = await axios.get(`${_apiUrl}${linkAnimals}&limit=100`)
  //     set(state => ({animals: res.data._embedded.items.map(_transformAnimals).slice(state.idStart, state.idEnd), loadingTest: 'confirmed'}))
  //   } catch(e) {
  //     set({loadingTest: 'error'})
  //     throw(e)
  //   }
  // }

  // export const getPrevAnimals = async (set, state, sybmol) => {
  //   set({loadingTest: 'loading'})
  //   set((state) => ({
  //     idStart: state.idStart - 9,
  //     idEnd: state.idEnd - 9,
  //     paramsId: state.paramsId - 1
  //   }))
  //   tryPrev(set, state)
  //   }

export const _transformAnimals = (item: any) => {  
  return {
    category: 'Animals',
    file: item.file,
    preview: item.preview,
    name: item.name,
    path: item.path,
    sizes: item.sizes,
  }
}
