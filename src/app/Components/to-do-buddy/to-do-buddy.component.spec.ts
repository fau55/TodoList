import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoBuddyComponent } from './to-do-buddy.component';

describe('ToDoBuddyComponent', () => {
  let component: ToDoBuddyComponent;
  let fixture: ComponentFixture<ToDoBuddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoBuddyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToDoBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
