import './CurrentWeather.css'
import { getTempByFahrenheit } from '../helpers'

export function CurrentWeather({
  weather: { temperature, humidity, conditions },
  isCelsius,
}) {
  const formattedTemp = isCelsius
    ? temperature
    : getTempByFahrenheit(temperature)

  return (
    <div className="current-weather">
      <div>
        <p>Temperature:</p>
        <p className="temperature">{`${formattedTemp} ${
          isCelsius ? '°C' : '°F'
        }`}</p>
      </div>
      <div>
        <p>{`Humidity: ${humidity}%`}</p>
        <p>{`${conditions}`}</p>
      </div>
    </div>
  )
}
