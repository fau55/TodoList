import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentComponent: string = 'todolist-db';
  title = 'frontEnd';
  message: any;


  showComponent1() {
    this.currentComponent = 'university';
  }

  showComponent2() {
    this.currentComponent = 'toDoList';
  }
  showComponent3() {
    this.currentComponent = 'task3-angular';
  }
  showComponent4() {
    this.currentComponent = 'fruits';
  }
  showComponent5() {
    this.currentComponent = 'users';
  }
  showComponent6() {
    this.currentComponent = 'home';
  }
  showComponent7() {
    this.currentComponent = 'country-list';
  }
  showComponent8() {
    this.currentComponent = 'todolist-db';
  }
}

