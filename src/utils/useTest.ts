export const linkAnimals: string = 'https://disk.yandex.ru/d/K4E-ldU2sp1VbQ'
export const linkFlowers: string = 'https://disk.yandex.ru/d/59Fax6UsF26zww'
export const linkStillLife: string = 'https://disk.yandex.ru/d/5yEFzsxVPTdx7A'
export const linkPeopleAndAnimals: string = 'https://disk.yandex.ru/d/a7CJ9FA93iy7OA'
export let id = 0;

export const _transformAnimals = (item: any) => {  
  return {
    category: 'Animals',
    name: item.name,
    path: item.path,
    sizes: item.sizes,
    id: id++
  }
}
