import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './app/app.reducer';
import * as fromWeather from './weather/weather.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      app: fromApp.reducer,
      weather: fromWeather.reducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ]
})
export class AppStoreModule { }
