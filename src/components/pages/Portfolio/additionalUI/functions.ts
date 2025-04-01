import path from "path"
import NavigateFunction from "react-router-dom/es/Navigate"

type TypeLoading = (value: React.SetStateAction<boolean>) => void
type TypeStateFunc  = () => void

export const callFuncLoading = (setLoading: TypeLoading) => {
  setLoading(true)
  setTimeout(() => { setLoading(false) }, 200)
}

export const testBack = (setLoading: TypeLoading, pathPictures: string, setOnePage: TypeStateFunc, setPrevPage: TypeStateFunc, setVisibleDisplay: TypeStateFunc, navigate: NavigateFunction, pathName: string, idTest: number) => {
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

export const testStart = (setLoading: TypeLoading, pathPictures: string, setOnePage: TypeStateFunc, navigate: NavigateFunction) => {
  callFuncLoading(setLoading)
  navigate(pathPictures)
  setOnePage()
}


// animals func
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

// flowers func
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

// people and animals func
export const expirementalFunc = (setLoading: TypeLoading, idTest: number, setOnePage: TypeStateFunc) => { // функция расчитана на одну страницу, когда будет больше страниц необходимо изменить функционал
  callFuncLoading(setLoading)
  if (idTest) {
    setOnePage()
  }
}

// still life func
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