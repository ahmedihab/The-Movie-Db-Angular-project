import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tvTitle'
})
export class TvTitlePipe implements PipeTransform {

  transform(title:string): unknown {
    return title.slice(0,12) ;
  }

}
