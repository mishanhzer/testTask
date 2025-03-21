interface ActiveClass {
  isActive: boolean
}

export const activeClassPage = ({ isActive }: ActiveClass) => ({
  borderBottom: isActive ? '2px solid rgb(30 58 138)' : 'none'
})