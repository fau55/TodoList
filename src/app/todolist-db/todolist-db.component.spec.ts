import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistDbComponent } from './todolist-db.component';

describe('TodolistDbComponent', () => {
  let component: TodolistDbComponent;
  let fixture: ComponentFixture<TodolistDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodolistDbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodolistDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
