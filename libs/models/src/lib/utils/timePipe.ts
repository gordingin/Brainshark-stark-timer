import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value:any, max:number): any {
    let timerValue = max;
    if(value != null)
      timerValue = value;
    return `${Math.floor(timerValue / 60)}:${('0' + (timerValue % 60)).slice(-2)}`;
    
    
  }

}