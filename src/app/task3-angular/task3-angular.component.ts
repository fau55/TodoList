import { Component } from '@angular/core';

@Component({
  selector: 'app-task3-angular',
  templateUrl: './task3-angular.component.html',
  styleUrl: './task3-angular.component.css'
})
export class Task3AngularComponent {

  activeParagraph: number = 0;

  toggleParagraph(paragraphNumber: number) {
    if (this.activeParagraph === paragraphNumber) {
      this.activeParagraph = 0;
    } else {
      this.activeParagraph = paragraphNumber;
    }
  }

  }
  


