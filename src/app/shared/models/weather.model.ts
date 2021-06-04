export interface Weather {
  name: string,
  coord: { lon: number, lat: number },
  main: { temp: number, humidity: number },
  sys: { country: string },
  wind: { speed: number },
  weather: Array<{ icon: string, main: string }>
}
