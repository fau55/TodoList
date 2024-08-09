import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitTask6Component } from './fruit-task6.component';

describe('FruitTask6Component', () => {
  let component: FruitTask6Component;
  let fixture: ComponentFixture<FruitTask6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitTask6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitTask6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
