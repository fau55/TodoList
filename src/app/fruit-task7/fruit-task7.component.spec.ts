import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitTask7Component } from './fruit-task7.component';

describe('FruitTask7Component', () => {
  let component: FruitTask7Component;
  let fixture: ComponentFixture<FruitTask7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitTask7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitTask7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
