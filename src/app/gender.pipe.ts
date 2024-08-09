import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string, gender: string): any {
    if(gender == 'male'){
      return 'Mr '+ value;
    }
    else if(gender == 'female'){
      return 'Miss '+ value;
    }
    
  }

}
