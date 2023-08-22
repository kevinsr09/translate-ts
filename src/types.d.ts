import { type SUPPORTED_LANGUAGES, type AUTO_LENGUAGE } from './constans.ts'

export interface State {
  fromLanguage: FromLanguage
  toLanguage: Language
  result: string
  loading: boolean
  fromText: string
}

export type AutoLanguage = typeof AUTO_LENGUAGE
export type Language = keyof typeof SUPPORTED_LANGUAGES
export type FromLanguage = AutoLanguage | Language

export type Action =
  | { type: 'INTERCHANCE_LENGUAGE' }
  | { type: 'SET_TEXT_FROM', payload: string }
  | { type: 'SET_TO_LANGUAGE', payload: Language }
  | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
