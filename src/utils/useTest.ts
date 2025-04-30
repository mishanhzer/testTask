export const linkAllWorks: string = 'https://disk.yandex.ru/d/lfSnAxDVpO_GfA'
export const linkAnimals: string = 'https://disk.yandex.ru/d/K4E-ldU2sp1VbQ'
export const linkFlowers: string = 'https://disk.yandex.ru/d/59Fax6UsF26zww'
export const linkStillLife: string = 'https://disk.yandex.ru/d/5yEFzsxVPTdx7A'
export const linkPeopleAndAnimals: string = 'https://disk.yandex.ru/d/a7CJ9FA93iy7OA'
const _apiUrl = 'https://cloud-api.yandex.net/v1/disk/public/resources?public_key='
export let id = 0;

export const urlAllWorks = `${_apiUrl}${linkAllWorks}&limit=100`
export const urlAnimals = `${_apiUrl}${linkAnimals}&limit=9`
export const urlFlowers = `${_apiUrl}${linkFlowers}&limit=9`
export const urlStillLife = `${_apiUrl}${linkStillLife}&limit=9`
export const urlPeopleAndAnimals = `${_apiUrl}${linkPeopleAndAnimals}&limit=9`

export const urlAnimalsShop = `${_apiUrl}${linkAnimals}&limit=12`

export const _transform = (item: any) => {  
  return {
    file: item.file,
    preview: item.preview,
    name: item.name,
    path: item.path,
    sizes: item.sizes,
  }
}
