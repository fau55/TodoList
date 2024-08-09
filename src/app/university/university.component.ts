import { Component } from '@angular/core';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrl: './university.component.css'
})
export class UniversityComponent {
  country: string = '';
  errorMessage: string = '';
  universities: any[] = [];
  flags: string = '';
  code: string = '';
  countryCode: string = '';

  constructor() { }


  onSearch(): void {
    fetch(`http://universities.hipolabs.com/search?country=${this.country}`).then((response) => {

      if (!response.ok) {
        throw new Error('Network not Found');
      }

      return response.json();
    }
    ).then((data) => {
      if (data.length <= 0) {
        alert("no University is found");
        return;

      }
      // Processing the fetched data here
      this.universities = data;
    })

  }
  ngOnInit(): void {

  }

}

