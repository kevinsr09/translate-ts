import { AUTO_LENGUAGE } from '../constans'
import { type Action, type State } from '../types.d'

export const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  result: '',
  loading: false,
  fromText: ''
}

export function reducer (state: State, action: Action) {
  const { type } = action

  if (type === 'INTERCHANCE_LENGUAGE') {
    if (state.fromLanguage === AUTO_LENGUAGE) return state

    const newState = {
      ...state,
      toLanguage: state.fromLanguage,
      fromLanguage: state.toLanguage

    }
    return newState
  }

  if (type === 'SET_TEXT_FROM') {
    const newState = {
      ...state,
      fromText: action.payload
    }
    return newState
  }

  if (type === 'SET_FROM_LANGUAGE') {
    if (state.fromLanguage === action.payload) return state
    const newState: State = {
      ...state,
      fromLanguage: action.payload
    }
    return newState
  }
  if (type === 'SET_TO_LANGUAGE') {
    if (state.toLanguage === action.payload) return state
    const newState: State = {
      ...state,
      toLanguage: action.payload
    }
    return newState
  }

  return state
}
