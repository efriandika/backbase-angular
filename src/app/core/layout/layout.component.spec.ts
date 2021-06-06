import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { findEl } from '../../tests/element.spec-helper';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppStoreModule } from '../../store/app-store.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('LayoutComponent Testing', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        AppStoreModule,
        ReactiveFormsModule,
      ],
      declarations: [ LayoutComponent, NavbarComponent, FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display header', () => {
    expect(findEl(fixture, 'app-navbar')).toBeTruthy();
  });

  it('should display footer', () => {
    expect(findEl(fixture, 'app-footer')).toBeTruthy();
  });
});
