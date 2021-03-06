import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyPrint'
})
export class PrettyPrintPipe implements PipeTransform {

  transform(value: any,): any {
    return JSON.stringify(value, null, 2);
      // .replace(' ', '&nbsp;')
      // .replace('\n', '<br/>');
  }

}
