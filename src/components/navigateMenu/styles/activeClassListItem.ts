interface ActiveClass {
  isActive: boolean
}

export const activeClassListItem = ({ isActive }: ActiveClass) => ({
  color: isActive ? 'rgba(156, 163, 175)' : 'inherit',
  textUnderlineOffset: isActive ? '10px' : '0px',
  textDecoration: isActive ? 'underline' : 'none',
  textDecorationThickness: isActive ? '1.5px' : '0px'
})

export const ulClass: string = `w-420 flex mt-8 mx-auto justify-between group pb-6`

export const classListItem: string = `text-sm uppercase text-gray-500 font-medium no-underline`