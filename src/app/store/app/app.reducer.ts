import { Action, createReducer, on } from '@ngrx/store';
import { addCity } from './app.actions';
import { AppState } from './app-state.model';

const initialState: AppState = {
  cities: [
    'Amsterdam',
    'Dublin,IE',
    'Edinburgh',
    'Manchester',
    'London',
  ],
};

const addCityReducer = (state: AppState, payload: { city: string }) => {
  const cities = state.cities;
  cities.push(payload.city);

  return { ...state, cities }
};

const appReducer = createReducer(
  initialState,
  on(addCity, addCityReducer),
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
