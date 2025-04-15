import axios from "axios"

export const linkAnimals: string = 'https://disk.yandex.ru/d/K4E-ldU2sp1VbQ'
export const linkFlowers: string = 'https://disk.yandex.ru/d/59Fax6UsF26zww'
export const linkStillLife: string = 'https://disk.yandex.ru/d/5yEFzsxVPTdx7A'
export const linkPeopleAndAnimals: string = 'https://disk.yandex.ru/d/a7CJ9FA93iy7OA'
export let id = 0;


export const getData = async (set, startNumber: number, endNumber: number) => {
  set({loadingTest: 'loading'})
  try {
    const res = await axios.get(`https://cloud-api.yandex.net/v1/disk/public/resources?public_key=${linkAnimals}&limit=100`)
    set({animals: res.data._embedded.items.map(_transformAnimals).slice(startNumber, endNumber), response: res.status, loadingTest: 'confirmed', paramsId: 1, idStart: startNumber, idEnd: endNumber})
  } catch(e) {
    set({loadingTest: 'error'})
    throw(e)
  }
  }

export const _transformAnimals = (item: any) => {  
  return {
    category: 'Animals',
    file: item.file,
    preview: item.preview,
    name: item.name,
    path: item.path,
    sizes: item.sizes,
    id: id++
  }
}
