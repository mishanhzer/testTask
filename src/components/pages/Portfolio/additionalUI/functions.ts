import NavigateFunction from "react-router-dom/es/Navigate"

type TypeLoading = (value: React.SetStateAction<boolean>) => void
type TypeStateFunc  = () => void

interface TypesAnimalsDataPages {
  path: string
  name: number
  source: string
  class: string
  func: () => void
}



// general func widget
export const callFuncLoading = (setLoading: TypeLoading) => {
  setLoading(true)
  setTimeout(() => { setLoading(false) }, 200)
}

export const goBack = (setLoading: TypeLoading, pathPictures: string, setOnePage: TypeStateFunc, setPrevPage: TypeStateFunc, setVisibleDisplay: TypeStateFunc, navigate: NavigateFunction, pathName: string, idTest: number) => {
  callFuncLoading(setLoading)
  if (idTest - 1 <= 1) {
    setOnePage()
    navigate(pathPictures)
  } else {
    setPrevPage()
    setVisibleDisplay()
    navigate(`${pathName}${idTest - 1}`)
  }
}

export const goStart = (setLoading: TypeLoading, pathPictures: string, setOnePage: TypeStateFunc, navigate: NavigateFunction) => {
  callFuncLoading(setLoading)
  navigate(pathPictures)
  setOnePage()
}


// animals data 
export const testData = (styles: string, setOnePage: TypeStateFunc, setTwoPage: TypeStateFunc, setThreePage: TypeStateFunc, setFourPage: TypeStateFunc, setFivePage: TypeStateFunc, setSixPage: TypeStateFunc) => {
  return [
    { path: `/portfolio/animals/1`, name: 1, source: '', class: styles, func: setOnePage },
    { path: '/portfolio/animals/2', name: 2, source: '', class: styles, func: setTwoPage },
    { path: '/portfolio/animals/3', name: 3, source: '', class: styles, func: setThreePage },
    { path: '/portfolio/animals/4', name: 4, source: '', class: styles, func: setFourPage },
    { path: '/portfolio/animals/5', name: 5, source: '', class: styles, func: setFivePage },
    { path: '/portfolio/animals/6', name: 6, source: '', class: styles, func: setSixPage },
  ]
}
// export const animalsDataPages: TypesAnimalsDataPages[] = [
//   { path: `/portfolio/animals/1`, name: 1, source: '', class: styles.listItems, func: setOnePage },
//   { path: '/portfolio/animals/2', name: 2, source: '', class: styles.listItems, func: setTwoPage },
//   { path: '/portfolio/animals/3', name: 3, source: '', class: styles.listItems, func: setThreePage },
//   { path: '/portfolio/animals/4', name: 4, source: '', class: styles.listItems, func: setFourPage },
//   { path: '/portfolio/animals/5', name: 5, source: '', class: styles.listItems, func: setFivePage },
//   { path: '/portfolio/animals/6', name: 6, source: '', class: styles.listItems, func: setSixPage },
// ]

// func widget
export const animalsForward = (setLoading: TypeLoading, pathPictures: string, setNextPage: TypeStateFunc, setVisibleDisplay: TypeStateFunc, navigate: NavigateFunction, pathName: string, idTest: number, setSixPage: TypeStateFunc) => {
  callFuncLoading(setLoading)
  if (idTest + 1 >= 6) {
    setSixPage()
    navigate(pathPictures)
  } else {
    setNextPage();
    setVisibleDisplay()
    navigate(`${pathName}${idTest + 1}`)
  }
}

export const animalsEnd = (setLoading: TypeLoading, pathPictures: string, setSixPage: TypeStateFunc, navigate: NavigateFunction) => {
  callFuncLoading(setLoading)
  navigate(pathPictures)
  setSixPage();
}

// flowers func widget
export const flowersForward = (setLoading: TypeLoading, pathPictures: string, setNextPage: TypeStateFunc, setVisibleDisplay: TypeStateFunc, navigate: NavigateFunction, pathName: string, idTest: number, setThreePage: TypeStateFunc) => {
  callFuncLoading(setLoading)
  if (idTest + 1 >= 3) {
    setThreePage()
    navigate(pathPictures)
  } else {
    setNextPage();
    setVisibleDisplay()
    navigate(`${pathName}${idTest + 1}`)
  }
}

export const flowersEnd = (setLoading: TypeLoading, pathPictures: string, setThreePage: TypeStateFunc, navigate: NavigateFunction) => {
  callFuncLoading(setLoading)
  navigate(pathPictures)
  setThreePage();
}

// people and animals func widget
export const peopleAndAnimalsFunc = (setLoading: TypeLoading, idTest: number, setOnePage: TypeStateFunc) => { // экспериментальная функция расчитана на одну страницу, когда будет больше страниц необходимо изменить функционал
  callFuncLoading(setLoading)
  if (idTest) {
    setOnePage()
  }
}

// still life func widget
export const stillLifeForward = (setLoading: TypeLoading, pathPictures: string, setNextPage: TypeStateFunc, setVisibleDisplay: TypeStateFunc, navigate: NavigateFunction, pathName: string, idTest: number, setTwoPage: TypeStateFunc) => {
  callFuncLoading(setLoading)
  if (idTest + 1 >= 2) {
    setTwoPage()
    navigate(pathPictures)
  } else {
    setNextPage();
    setVisibleDisplay()
    navigate(`${pathName}${idTest + 1}`)
  }
}

export const stillLifeEnd = (setLoading: TypeLoading, pathPictures: string, setTwoPage: TypeStateFunc, navigate: NavigateFunction) => {
  callFuncLoading(setLoading)
  navigate(pathPictures)
  setTwoPage();
}