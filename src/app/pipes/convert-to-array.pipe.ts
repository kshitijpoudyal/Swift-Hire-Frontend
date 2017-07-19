import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertToArray'
})
export class ConvertToArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Array.from(value);
  }

}
