interface ClassInputAnt {
  height: number
  fontSize: number
  color: string
  fontFamily: string
  fontWeight: number
  minHeight?: number
}

interface PropMessage {
  minHeight: number
}

const propForMessage: PropMessage = {
  minHeight: 160
}

export const classInput: string = `w-72 placeholder-gray-500 border p-2.5 outline-none rounded font-medium text-gray-500}`
export const classMailAndMessage: string = `w-full border p-2.5 outline-none rounded text-gray-500`

export const classInputAnt: ClassInputAnt = {height: 44, fontSize: 18, color: '#636363', fontFamily: 'Lora, serif, sans-serif', fontWeight: 400}
export const classMessageAnt: ClassInputAnt = {...classInputAnt, ...propForMessage}
export const classLabelAnt: string = `text-gray-500, text-fz15`

export const classFlex: string = `flex flex-col`