import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { SpeedUnitPipe } from './pipes/speed-unit.pipe';
import { TemperatureUnitPipe } from './pipes/temperature-unit.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SkeletonComponent,
    WeatherComponent,
    WeatherListComponent,
    SpeedUnitPipe,
    TemperatureUnitPipe
  ],
  exports: [
    SkeletonComponent,
    WeatherListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {}
