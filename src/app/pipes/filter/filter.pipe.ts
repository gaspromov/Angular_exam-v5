import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], param: string, field: string): unknown {

    if ( arr && param && field )
      arr = arr.filter( ell => ell[field].toLowerCase().trim().indexOf( param.toLowerCase().trim() ) === 0 )

    return arr;
  }

}
