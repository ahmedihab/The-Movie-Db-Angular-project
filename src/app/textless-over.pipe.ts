import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textlessOver'
})
export class TextlessOverPipe implements PipeTransform {

  transform(overview:string): unknown {
    return overview.slice(0,50)+"... See more";
  }
  }


