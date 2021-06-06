import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { findEl } from '../tests/element.spec-helper';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { AppStoreModule } from '../store/app-store.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, CoreModule, AppStoreModule],
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display weather list', () => {
    expect(findEl(fixture, 'app-weather-list')).toBeTruthy();
  });

  it('should add new city when it get triggered', () => {
    component.handleNewCity('Jakarta');

    component.cities$.subscribe((cities) => {
      expect(cities.length).toEqual(6);
    });
  });
});
