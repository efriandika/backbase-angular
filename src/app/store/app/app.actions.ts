import { createAction, props } from '@ngrx/store';

export const ADD_CITY = '[APP] ADD_CITY';

export const addCity = createAction(ADD_CITY, props<{ city: string; }>());
