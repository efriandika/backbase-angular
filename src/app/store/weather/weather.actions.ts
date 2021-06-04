import { createAction, props } from '@ngrx/store';

export const SET_UNITS = '[WEATHER] SET_UNITS';
export const ENABLE_IMPERIAL_UNITS = '[WEATHER] ENABLE_IMPERIAL_UNITS';
export const ENABLE_METRIC_UNITS = '[WEATHER] ENABLE_METRIC_UNITS';

export const setUnits = createAction(SET_UNITS, props<{ units: string; }>());
export const enableImperialUnits = createAction(ENABLE_IMPERIAL_UNITS);
export const enableMetricUnits = createAction(ENABLE_METRIC_UNITS);
