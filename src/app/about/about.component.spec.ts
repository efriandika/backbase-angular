import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent Testing', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text "find me on"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const el = bannerElement.querySelector('.container')!;
    expect(el.textContent).toMatch(/find me on/i);
  });
});
