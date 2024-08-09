import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryTimezoneService {
  private storedData: any[] = [];

  constructor() { }
  sendData(data: any[]): void {
    // Store the received data
    this.storedData = data;
    console.log(this.storedData);
  }

  getData(): Observable<any[]> {
    return of(this.storedData); // Convert the array to an Observable
  }
}
