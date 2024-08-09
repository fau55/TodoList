import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitTask2Component } from './fruit-task2.component';

describe('FruitTask2Component', () => {
  let component: FruitTask2Component;
  let fixture: ComponentFixture<FruitTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitTask2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
