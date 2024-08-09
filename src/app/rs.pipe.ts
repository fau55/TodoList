import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rs'
})
export class RsPipe implements PipeTransform {

  transform(value: any): any {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
