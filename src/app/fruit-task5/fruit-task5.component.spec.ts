import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitTask5Component } from './fruit-task5.component';

describe('FruitTask5Component', () => {
  let component: FruitTask5Component;
  let fixture: ComponentFixture<FruitTask5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitTask5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitTask5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
