import './FiveDaysForecast.css'
import { getTempByFahrenheit } from '../helpers'
import { getImageByCondition } from '../images/config'

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function FiveDaysForecast({ days, isCelsius }) {
  return (
    <div>
      <p className="forecast-title">5-DAY FORECAST</p>
      <div className="forecast-days">
        {days.map(({ date, temperature: { min, max }, conditions }) => {
          const weekDay = dayNames[new Date(date).getDay()]
          const minTemp = isCelsius ? min : getTempByFahrenheit(min)
          const maxTemp = isCelsius ? max : getTempByFahrenheit(max)
          const image = getImageByCondition(conditions)

          return (
            <div className="forecast-day" key={date}>
              <p className="week-day">{weekDay}</p>
              <div className="forecast-temp">
                <span>{`H: ${maxTemp}°`}</span>
                <span>{`L: ${minTemp}°`}</span>
              </div>
              {image && <img className="forecast-image" src={image} alt="" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
