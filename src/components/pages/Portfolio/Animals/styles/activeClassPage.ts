interface ActiveClass {
  isActive: boolean
}

export const activeClassPage = ({ isActive }: ActiveClass) => ({
  borderBottom: isActive ? '2px solid rgb(30 58 138)' : 'none'
})

export const btnLoadMore: string = 'mt-8 px-4 w-48 justify-center text-2xl'