import './CurrentWeather.css'

export function CurrentWeather({
  weather: { temperature, humidity, conditions },
}) {
  return (
    <div className="Current-weather">
      <div>{`Temperature: ${temperature}`}</div>
      <div>{`Humidity: ${humidity}`}</div>
      <div>{`Conditions: ${conditions}`}</div>
    </div>
  )
}
