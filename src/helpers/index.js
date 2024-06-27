export const getTempByFahrenheit = (tempInCelsius) => {
  return Math.floor((tempInCelsius * 9) / 5 + 32)
}
