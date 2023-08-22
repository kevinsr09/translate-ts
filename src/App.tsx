import React from 'react'
import './App.css'
import { useTranslate } from './hooks/useTranslate'
import { type FromLanguage, type Language } from './types'

function App () {
  const { fromLanguage, toLanguage, interchanceLenguage, setFromLenguage, setToLenguage, fromText, result } = useTranslate()

  const handleClick = () => {
    interchanceLenguage()
  }
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.name === 'from') {
      const value = event.target.value
      setFromLenguage((value as FromLanguage))
    }

    if (event.target.name === 'to') {
      const value = event.target.value
      setToLenguage((value as Language))
    }
  }

  return (
    <div>

      <header>
        <div>
          <select name="from" id="" value={fromLanguage} onChange={handleChange}>
            <option value="auto">Auto</option>
            <option value="en">Englisg</option>
            <option value="es">Spanish</option>
            <option value="fr">Frances</option>
          </select>

          <button onClick={handleClick}>Intercambiar</button>

          <select name="to" id="" value={toLanguage} onChange={handleChange}>
            <option value="en">Englisg</option>
            <option value="es">Spanish</option>
            <option value="fr">Frances</option>
          </select>
        </div>
      </header>

      <main>
        <div>

          <textarea name="" id="" cols="30" rows="10" value={fromText} >

          </textarea>
          <textarea name="" id="" cols="30" rows="10" disabled value={result}>

          </textarea>
        </div>

      </main>

    </div>
  )
}

export default App
