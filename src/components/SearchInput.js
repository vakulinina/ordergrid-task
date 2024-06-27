import { useState, useCallback } from 'react'
import { fetchWeather } from '../redux/slices/weatherSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toggleUnit } from '../redux/slices/weatherSlice.js'

export function SearchInput() {
  const { isCelsius } = useSelector((state) => state.weather)
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const handleInput = ({ target }) => {
    setInput(target.value)
  }

  const handleSubmit = () => {
    dispatch(fetchWeather(input))
  }

  const handleToggleUnit = () => {
    dispatch(toggleUnit())
  }

  return (
    <div
      style={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}
    >
      <div style={{ display: 'flex', gap: '10px' }}>
        <input value={input} onInput={handleInput} placeholder="Enter city" />
        <button type="button" onClick={handleSubmit}>
          Search
        </button>
      </div>
      <button onClick={handleToggleUnit}>{isCelsius ? '°C' : '°F'}</button>
    </div>
  )
}
