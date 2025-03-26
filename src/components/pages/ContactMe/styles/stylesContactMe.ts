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

export const divContainer: string = `flex w-1200 mt-36 mx-auto`
export const classInput: string = `w-72 placeholder-gray-500 border p-2.5 outline-none rounded font-medium text-gray-500}`
export const classMailAndMessage: string = `w-full border p-2.5 outline-none rounded text-gray-500`

export const classInputAnt: ClassInputAnt = {height: 44, fontSize: 18, color: '#636363', fontFamily: 'Lora, serif, sans-serif', fontWeight: 400}
export const classMessageAnt: ClassInputAnt = {...classInputAnt, ...propForMessage}
export const classLabelAnt: string = `text-gray-500, text-fz15`

export const classFlex: string = `flex flex-col`

export const styleForm = {
  maxWidth: 600, 
  marginLeft: 70 
}

export const firstItem = {
  width: 500, 
  alignSelf: 'flex-end' 
}

export const secondItem = {
  width: 500, 
  alignSelf: 'flex-end', 
  marginLeft: 30 
}


export const thirdItem = {
  width: '100%', 
  alignSelf: 'flex-end',
  marginTop: 15 
}

export const fourthItem = {
  width: '100%', 
  alignSelf: 'flex-end', 
  marginTop: 35
}