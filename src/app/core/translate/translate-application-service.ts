import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestCallService } from '../services/rest-call/rest-call.service';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../services/notification/notification.service';
import { TranslateService } from '../services/translate-service';
import { TransactionResult } from '../services/interfaces/transaction-result';

export var self: TranslateApplicationService = null;

@Injectable({
  providedIn: 'root'
})
export class TranslateApplicationService extends RestCallService{
  data: any = {};
  currentLang: string;

  constructor(
    public httpClient: HttpClient
    , public toastr: ToastrService
    , public notificationService: NotificationService) {
    super(httpClient, 'TranslateService', toastr, notificationService, self);
  }

  use(lang: any): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {

      const langPath = `translations?appId=${lang.applicationId}&langId=${lang.id}`;
      this.get<any>(langPath).subscribe(
        (translation: TransactionResult<any>) => {
          if (translation.success) {
            this.useLocal(lang.flag, JSON.parse(translation.data), resolve);
            //this.data = Object.assign({}, JSON.parse(translation.data) || {});
            //console.log(this.data);
            //resolve(this.data);
          }
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }

  private useLocal(lang: string, languageRemote: any, resolve: any) {
    var fileName;

    if (lang.split('-').length > 0)
      fileName = lang.split('-')[0];
    else
      fileName = lang;

    const langPath = `assets/i18n/${fileName || 'en'}.json`;
    this.http.get<{}>(langPath).subscribe(
      translation => {
        this.data = Object.assign({}, translation || {}, languageRemote || {});
        console.log(this.data);
        resolve(this.data);
      },
      error => {
        this.data = Object.assign({}, languageRemote || {});
        resolve(this.data);
      }
    );
  }

  translateKey(key: string) {
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
