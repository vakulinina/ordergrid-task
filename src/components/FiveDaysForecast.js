import './FiveDaysForecast.css'
import { getTempByFahrenheit } from '../helpers'

export function FiveDaysForecast({ days, isCelsius }) {
  const unit = isCelsius ? '°C' : '°F'

  return (
    <div className="forecast">
      <p className="forecast-title">5-DAY FORECAST</p>

      {days.map(({ date, temperature: { min, max }, conditions }) => {
        const minTemp = isCelsius ? min : getTempByFahrenheit(min)
        const maxTemp = isCelsius ? max : getTempByFahrenheit(max)

        return (
          <div className="forecast-day" key={date}>
            <div>{date}</div>
            <div className="forecast-day-conditions">
              <span>{`L: ${minTemp} ${unit} | H: ${maxTemp} ${unit}`}</span>
              <span style={{ alignSelf: 'flex-end' }}>{`${conditions}`}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
