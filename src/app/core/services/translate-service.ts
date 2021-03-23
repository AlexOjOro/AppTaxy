import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  data: any = {};
  currentLang: string;

  constructor(private http: HttpClient) { }

  use(lang: any): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {

      const langPath = `assets/i18n/${lang || 'en'}.json`;
      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }

  translate(key: string) {
    if (key.split(".").length == 1)
      return this.data[key] || key;
    else {
      let arrayKey: any;
      arrayKey = key.split(".");
      let valueFind: any = "";

      let index: number = 0;

      for (let item of arrayKey) {
        if (index == 0)
          valueFind = this.data[item];
        else {
          valueFind = valueFind == undefined ? key : valueFind[item];
        }

        index++;
      }
      return valueFind;
    }
  }
}
