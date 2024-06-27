import { createSlice } from '@reduxjs/toolkit'
import { CURRENT_FORECAST } from '../../constants/current_forecast.js'
import { FIVE_DAYS_FORECAST } from '../../constants/five_days_forecast.js'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    isCelsius: true,
    current: undefined,
    forecast: undefined,
  },
  reducers: {
    fetchWeather: (state, action) => {
      state.current = CURRENT_FORECAST?.find(
        ({ city }) => city.toLowerCase() === action.payload.toLowerCase()
      )?.currentWeather

      state.forecast = FIVE_DAYS_FORECAST?.find(
        ({ city }) => city.toLowerCase() === action.payload.toLowerCase()
      )?.forecast
    },
    toggleUnit: (state) => {
      state.isCelsius = !state.isCelsius
    },
  },
})

export const { fetchWeather, toggleUnit } = weatherSlice.actions

export default weatherSlice.reducer
