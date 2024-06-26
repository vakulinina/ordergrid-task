import './App.css'
import { SearchInput } from './components/SearchInput.js'
import { CURRENT_FORECAST } from './constants/current_forecast.js'
import { FIVE_DAYS_FORECAST } from './constants/five_days_forecast.js'
import { useState, useCallback } from 'react'
import { FiveDaysForecast } from './components/FiveDaysForecast.js'
import { CurrentWeather } from './components/CurrentWeather.js'

function App() {
  const [currentWeather, setCurrentWeather] = useState()
  const [fiveDaysForecast, setFiveDaysForecast] = useState()

  const handleSearch = useCallback(
    (input) => {
      if (!input) return

      setCurrentWeather(
        CURRENT_FORECAST?.find(
          ({ city }) => city.toLowerCase() === input.toLowerCase()
        )?.currentWeather
      )
      setFiveDaysForecast(
        FIVE_DAYS_FORECAST?.find(
          ({ city }) => city.toLowerCase() === input.toLowerCase()
        )?.forecast
      )
    },
    [setCurrentWeather, setFiveDaysForecast]
  )

  return (
    <main className="App">
      <SearchInput onSubmit={handleSearch} />
      {currentWeather && fiveDaysForecast ? (
        <>
          <CurrentWeather weather={currentWeather} />
          <FiveDaysForecast days={fiveDaysForecast} />
        </>
      ) : (
        <div>No forecast was found for your request</div>
      )}
    </main>
  )
}

export default App
