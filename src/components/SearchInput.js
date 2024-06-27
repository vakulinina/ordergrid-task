import { useState } from 'react'
import { fetchWeather } from '../redux/slices/weatherSlice'
import { useDispatch, useSelector } from 'react-redux'
import './SearchInput.css'

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

  return (
    <div className="search-wrapper">
      <input
        value={input}
        onInput={handleInput}
        placeholder="Enter city"
        className="search-input"
      />
      <button type="button" onClick={handleSubmit} className="search-button">
        Search
      </button>
    </div>
  )
}
