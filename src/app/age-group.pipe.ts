import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageGroup'
})
export class AgeGroupPipe implements PipeTransform {

  transform(age: number): any {
    if(age <= 3){
      return "Baby";
    }
    else if (age <= 12 && age >=4){
      return "Child";
    }
    else if (age <= 19 && age >=13){
      return "Teenager";
    }
    else if (age <= 59 && age >=20){
      return "Adult";
    }
    else if (age > 60){
      return "Senior";
    }
   
  }

}
