import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotFoundComponent', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ NotFoundComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not found page information', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toMatch(/We couldn't find the page/i);
  });

  it('should tell ROUTER to navigate when back to home button get clicked', () => {
    component.goToHome();

    const navArgs = routerSpy.navigateByUrl.calls.first().args[0];
    expect(navArgs).toEqual('/');
  });
});
