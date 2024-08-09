import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3AngularComponent } from './task3-angular.component';

describe('Task3AngularComponent', () => {
  let component: Task3AngularComponent;
  let fixture: ComponentFixture<Task3AngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Task3AngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Task3AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
