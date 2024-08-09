import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCubeViewComponent } from './color-cube-view.component';

describe('ColorCubeViewComponent', () => {
  let component: ColorCubeViewComponent;
  let fixture: ComponentFixture<ColorCubeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorCubeViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorCubeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
