import './App.css'
import { SearchInput } from './components/SearchInput.js'
import { CurrentWeather } from './components/CurrentWeather.js'
import { FiveDaysForecast } from './components/FiveDaysForecast.js'
import { useSelector } from 'react-redux'

function App() {
  const { current, forecast, isCelsius, city } = useSelector(
    (state) => state.weather
  )

  return (
    <main className="App">
      <SearchInput />
      {current && forecast ? (
        <>
          <CurrentWeather weather={current} isCelsius={isCelsius} city={city} />
          <FiveDaysForecast days={forecast} isCelsius={isCelsius} />
        </>
      ) : (
        <p>No forecast was found for your request</p>
      )}
    </main>
  )
}

export default App
