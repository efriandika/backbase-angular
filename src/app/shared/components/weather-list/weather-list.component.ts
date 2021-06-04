import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherClickPayload } from '../../models/weather-click-payload.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Collection of city
 *
 * @author efriandika
 */
@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {

  /**
   * Custom css className
   */
  @Input() className: string = '';

  /**
   * Data Unit
   * @see {@link https://openweathermap.org/current#dat} for more information
   */
  @Input() units: string | null = 'metric';

  /**
   * List of city name
   */
  @Input() cities: string[] | null = [];

  /**
   * It will be fired When an item is clicked
   */
  @Output() cityClick = new EventEmitter<WeatherClickPayload>();

  /**
   * It will be fired When new city form submitted
   */
  @Output() newCitySubmit = new EventEmitter<string>();

  public newCityForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.createNewCityForm();
  }

  public createNewCityForm() {
    this.newCityForm = this.fb.group({
      cityName: ['', Validators.required],
    });
  }

  /**
   * Fired when new city form submitted
   */
  public handleNewCityForm() {
    if (this.newCityForm.get('cityName') != null && this.newCityForm.get('cityName')?.value != null) {
      this.newCitySubmit.emit(this.newCityForm.get('cityName')?.value);
      this.newCityForm.reset();
    }
  }

  /**
   * Fired when a city weather box get clicked
   * @param payload
   */
  public handleCityClick(payload: WeatherClickPayload) {
    this.cityClick.emit(payload);
  }
}
