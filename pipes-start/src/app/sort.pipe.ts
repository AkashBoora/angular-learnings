import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): unknown {
    return value.sort((item1,item2)=> {
      if(item1[propName]>item2[propName]){
        return 1;
      }else {
        return -1;
      }
    });
  }
}
