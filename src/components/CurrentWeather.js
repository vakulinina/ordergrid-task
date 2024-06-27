import './CurrentWeather.css'
import { getTempByFahrenheit } from '../helpers'
import { getImageByCondition } from '../images/config'
import { useDispatch } from 'react-redux'
import { toggleUnit } from '../redux/slices/weatherSlice.js'

export function CurrentWeather({
  weather: { temperature, humidity, conditions },
  isCelsius,
  city,
}) {
  const dispatch = useDispatch()

  const handleToggleUnit = () => {
    dispatch(toggleUnit())
  }

  const formattedTemp = isCelsius
    ? temperature
    : getTempByFahrenheit(temperature)

  const image = getImageByCondition(conditions)

  return (
    <div>
      <p className="title">{city}</p>
      <div className="current-weather">
        <div className="current-weather-section">
          <div style={{ whiteSpace: 'nowrap' }}>
            <span className="temperature">{formattedTemp}</span>
            <button onClick={handleToggleUnit} className="unit-toggle">
              <p>
                <span className={isCelsius && 'active'}>°C</span>
                {' | '}
                <span className={!isCelsius && 'active'}>°F</span>
              </p>
            </button>
          </div>
          <p className="humidity">
            <span>{`${humidity}%`}</span>
            <span className="humidity-caption">humidity</span>
          </p>
        </div>
        <div className="conditions">
          {image && <img src={image} alt="" width={120} height={120} />}
        </div>
      </div>
    </div>
  )
}
