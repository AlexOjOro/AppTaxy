import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TransactionResult } from '../interfaces/transaction-result';
import { Observable, merge, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../notification/notification.service';
import { tap } from 'rxjs/operators';
import { TranslateApplicationService } from '../../translate/translate-application-service';

export var  self : RestCallService = null;
/*
 *
 *abstract class to request resources from resources servers
 *
 * */
export abstract class RestCallService {
  private urlBase: string;
  
  constructor(public http: HttpClient
    , urlKey: string
    , public toastr: ToastrService 
    , public notificationService: NotificationService,
  public translate: TranslateApplicationService) {
    if (!Boolean(urlKey)) {
      throw Error("property urlBase:string is not defined , consider to configure the app on quetzalcoatl maintenance");
    }
    this.urlBase = (<any>window).configuration.enviroment[urlKey];
    if (!Boolean(this.urlBase)) {
      throw Error("property urlBase:string is not defined inside enviroment variables on quetzalcoatl maintenance");
    }
    self = this;
  }
 
  private getFullUrl(url: string): string {
    return this.urlBase + url;
  }

  private success(data: TransactionResult<any>): void {
    if (data.success) {
      if (Boolean(data.message)) {
        self.toastr.info(data.message);
      }
      if (Boolean(data.messages)) {
        for (let item of data.messages) {
          //self.toastr.info(item);
        }
      }
    }
    if (!data.success) {
      if (self.translate != null) {
        self.notificationService.addAlert({
          icon: 'error',
          message: `${self.translate.translateKey(data.message)}`,
          shown: false,
          title: "Error"
        });
        if (Boolean(data.messages)) {
          for (let item of data.messages) {
            self.notificationService.addAlert({
              icon: 'error',
              message: `${item}`,
              shown: false,
              title: "Error"
            });
          }
        }
      }
    }
  }

  private error(error :HttpErrorResponse) : void{
    self.notificationService.addAlert({
      icon : 'error',
      message : error.message,
      shown : false,
      title :"Error" 
     });
    if (error.status === 401) {
      self.toastr.warning(error.message);
    }
    if (error.status === 500) {
      self.toastr.error(error.message);
    }
    if (error.status === 404) {
      self.toastr.info(error.message);
    }
    if (error.status === 0) {
      self.toastr.info(error.message);
    }
    if (error.status === 405) {
      self.toastr.info(error.message);
    }
    console.log(error);
  }

  
  /*
   *
   *http get 
   * 
   */
  public get<TResult>(url: string, data?: any, headers?: HttpHeaders | any): Observable<TransactionResult<TResult>> {
    if (!Boolean(headers)) {
      headers = {};
    }

    return this.http.get<TransactionResult<TResult>>(this.getFullUrl(url), {
      headers: Object.assign(headers, {
        'urlBase': this.urlBase
      }),
      params: data
    }).pipe(tap(this.success, this.error));
  }

  /*
   *
   *http post 
   * 
   */
  public post<TResult>(url: string, data?: any, headers?: HttpHeaders | any): Observable<TransactionResult<TResult>> {
    if (!Boolean(headers)) {
      headers = {};
    }
    return this.http.post<TransactionResult<TResult>>(this.getFullUrl(url), data, {
      headers: {
        'urlBase': this.urlBase
      }
    }).pipe(tap(this.success, this.error));
  }


  /*
   *
   *http put 
   * 
   */
  public put<TResult>(url: string, data?: any, headers?: HttpHeaders | any): Observable<TransactionResult<TResult>> {
    if (!Boolean(headers)) {
      headers = {};
    }
    return this.http.put<TransactionResult<TResult>>(this.getFullUrl(url), data, {
      headers: {
        'urlBase': this.urlBase
      }
    }).pipe(tap(this.success, this.error));
  }


  /*
   *
   *http delete
   * 
   */
  public delete<TResult>(url: string, params?: any, headers?: HttpHeaders | any): Observable<TransactionResult<TResult>> {
    if (!Boolean(headers)) {
      headers = {};
    }
    return this.http.delete<TransactionResult<TResult>>(this.getFullUrl(url), {
      headers: {
        'urlBase': this.urlBase
      }, params: params
    }).pipe(tap(this.success, this.error));
  }
}
