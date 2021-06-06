import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { findEl, getText } from '../../../tests/element.spec-helper';

describe('NavbarComponent Testing', () => {
  const initialState = {
    weather: {
      units: 'metric'
    }
  }

  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [NavbarComponent],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display app name', () => {
    component.appName = 'App Name';

    fixture.detectChanges();

    expect(getText(fixture, '.navbar-brand')).toContain(component.appName);
  });

  it('should handle unit switcher', () => {
    const switcher: HTMLInputElement = findEl(fixture, '[type=checkbox]').nativeElement;

    expect(switcher.checked).toBe(true);
    expect(component.unitsSwitcher.value).toBe(true);

    switcher.click();
    fixture.detectChanges();

    expect(switcher.checked).toBe(false);
    expect(component.unitsSwitcher.value).toBe(false);
  });
});
