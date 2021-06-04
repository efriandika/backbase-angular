import { Action, createReducer, on } from '@ngrx/store';
import { WeatherState } from './weather-state.model';
import { enableImperialUnits, enableMetricUnits, setUnits } from './weather.actions';

const initialState: WeatherState = {
  units: 'metric',
};

const setUnitsReducer = (state: WeatherState, payload: { units: string }) => {
  return { ...state, units: payload.units }
};

const weatherReducer = createReducer(
  initialState,
  on(setUnits, setUnitsReducer),
  on(enableImperialUnits, (state: WeatherState) => setUnitsReducer(state, { units: 'imperial' })),
  on(enableMetricUnits, (state: WeatherState) => setUnitsReducer(state, { units: 'metric' })),
);

export function reducer(state: WeatherState | undefined, action: Action) {
  return weatherReducer(state, action);
}
