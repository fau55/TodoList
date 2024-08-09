import { Pipe, PipeTransform } from '@angular/core';
// import { DatePipe } from '@angular/common';


@Pipe({
  name: 'formateDate'
})
export class FormateDatePipe implements PipeTransform {
  transform(value: string): any {
    // Replace the non-standard timezone separator (-06:-30) with a standard one (-0630)
    const modifiedValue = value.replace(/(-\d{2}):(\d{2})/, '$1$2');
    
    // Extract the date part using regular expression
    const dateRegex = /(\d{4}-\d{2}-\d{2})/; // Matches the pattern YYYY-MM-DD
    const match = dateRegex.exec(modifiedValue);
    
    if (match && match.length > 0) {
      const dateString = match[0];
      // Convert the string to a Date object
      const date = new Date(dateString);
      return date;
    }
     else {
      // Return null or throw an error depending on your use case
      return 0;
      // throw new Error('Invalid date format');
    }
  }
}
