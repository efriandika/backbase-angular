export interface WeatherForecast {
  current: {
    dt: number,
    weather: Array<{ icon: string, main: string }>
  }
  hourly: Array<{
    dt: number,
    temp: number,
    feels_like: number,
    wind_speed: number,
  }>,
}
