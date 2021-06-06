import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonComponent } from './skeleton.component';
import { findComponents, findEl } from '../../../tests/element.spec-helper';

describe('SkeletonComponent Testing', () => {
  let component: SkeletonComponent;
  let fixture: ComponentFixture<SkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the required number of the skeleton', async () => {
    component.count = 4;
    component.ngOnChanges({
      count: {
        previousValue: null,
        currentValue: 4,
        firstChange: true,
        isFirstChange: () => true
      }
    });

    fixture.detectChanges();

    const renderedComponents = findComponents(fixture, '.skeleton');
    expect(renderedComponents.length).toBe(4);
  });

  it('should render custom className if provided', async () => {
    component.count = 4;
    component.className = 'test-class';
    component.ngOnChanges({
      count: {
        previousValue: null,
        currentValue: 4,
        firstChange: true,
        isFirstChange: () => true
      }
    });

    fixture.detectChanges();

    const renderedComponent = findEl(fixture, '.skeleton').nativeElement;

    expect(renderedComponent).toHaveClass('test-class');
  });
});
