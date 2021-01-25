import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[]) {

    if ( arr )
      arr = arr.sort( (a,b) => {
        if ( a.secondname.toLowerCase() > b.secondname.toLowerCase() )
          return 1;
        if ( a.secondname.toLowerCase() < b.secondname.toLowerCase() )
          return -1;
        else return 0
      })

    return arr;
  }

}
