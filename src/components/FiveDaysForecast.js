import './FiveDaysForecast.css'
export function FiveDaysForecast({ days }) {
  return (
    <div className="forecast">
      <p>5-Day Forecast</p>

      {days.map(({ date, temperature, conditions }) => (
        <div className="forecast-day" key={date}>
          <div>{date}</div>
          <div className="forecast-day-conditions">
            <span>{`Temperature: min ${temperature.min}, max ${temperature.max}`}</span>
            <span>{`Conditions: ${conditions}`}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
