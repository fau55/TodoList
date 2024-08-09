import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitTask1Component } from './fruit-task1.component';

describe('FruitTask1Component', () => {
  let component: FruitTask1Component;
  let fixture: ComponentFixture<FruitTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitTask1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
