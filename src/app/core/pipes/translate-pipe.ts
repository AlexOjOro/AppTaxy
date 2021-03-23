import { Pipe, PipeTransform } from '@angular/core';
import { TranslateApplicationService } from '../translate/translate-application-service';
//import { TranslateService } from '../services/translate-service';
@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: TranslateApplicationService) { }
  transform(key: any): any {
    if (key.split(".").length == 1)
      return this.translate.data[key] || key;
    else {
      let arrayKey: any;
      arrayKey = key.split(".");
      let valueFind: any = "";

      let index: number = 0;

      for (let item of arrayKey) {
        if (index == 0)
          valueFind = this.translate.data[item];
        else {
          valueFind = valueFind == undefined ? key : valueFind[item];
        }

        index++;
      }
      return valueFind;
    }
  }
}
