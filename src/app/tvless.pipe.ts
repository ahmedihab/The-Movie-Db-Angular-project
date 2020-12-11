import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tvless'
})
export class TvlessPipe implements PipeTransform {

  transform(title:string): unknown {
    return title.slice(0,22)+'...See more';
  }

}
