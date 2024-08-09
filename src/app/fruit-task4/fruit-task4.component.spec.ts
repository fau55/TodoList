import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitTask4Component } from './fruit-task4.component';

describe('FruitTask4Component', () => {
  let component: FruitTask4Component;
  let fixture: ComponentFixture<FruitTask4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitTask4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitTask4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
