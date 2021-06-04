import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { SpeedUnitPipe } from './pipes/speed-unit.pipe';
import { TemperatureUnitPipe } from './pipes/temperature-unit.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { UnixTimestampToPipe } from './pipes/unix-timestamp-to.pipe';

@NgModule({
  declarations: [
    SkeletonComponent,
    WeatherComponent,
    WeatherListComponent,
    SpeedUnitPipe,
    TemperatureUnitPipe,
    WeatherForecastComponent,
    UnixTimestampToPipe
  ],
  exports: [
    SkeletonComponent,
    WeatherListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModalModule,
  ]
})
export class SharedModule {}
