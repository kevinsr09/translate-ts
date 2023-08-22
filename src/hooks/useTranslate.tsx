import { useReducer } from 'react'
import { initialState, reducer } from '../reducer/reducer'
import { type Language, type FromLanguage } from '../types'

export function useTranslate () {
  const [{
    fromLanguage,
    fromText,
    loading,
    result,
    toLanguage
  }, dispatch] = useReducer(reducer, initialState)

  const interchanceLenguage = () => {
    dispatch({ type: 'INTERCHANCE_LENGUAGE' })
  }

  const setFromLenguage = (value: FromLanguage) => {
    if (value === fromLanguage) return
    dispatch({ type: 'SET_FROM_LANGUAGE', payload: value })
  }
  const setToLenguage = (value: Language) => {
    if (value === toLanguage) return
    dispatch({ type: 'SET_TO_LANGUAGE', payload: value })
  }

  return {
    fromLanguage,
    fromText,
    loading,
    result,
    toLanguage,
    interchanceLenguage,
    setFromLenguage,
    setToLenguage
  }
}
