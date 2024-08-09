import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(value: any[], searchText: string): any {
    // if(!value)return [];
    // if(!searchText)return [];
    if(searchText == '') return value;
    searchText.toLowerCase();
    return value.filter(it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }

}
