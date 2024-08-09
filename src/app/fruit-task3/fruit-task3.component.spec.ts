import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitTask3Component } from './fruit-task3.component';

describe('FruitTask3Component', () => {
  let component: FruitTask3Component;
  let fixture: ComponentFixture<FruitTask3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitTask3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitTask3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
