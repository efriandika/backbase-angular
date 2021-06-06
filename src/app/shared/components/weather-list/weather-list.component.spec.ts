import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherListComponent } from './weather-list.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('WeatherListComponent Testing', () => {
  let component: WeatherListComponent;
  let fixture: ComponentFixture<WeatherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ WeatherListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
