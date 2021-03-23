import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { RestCallService } from '../services/rest-call/rest-call.service';
import { TranslateService } from '../services/translate-service';
import { Observable } from 'rxjs';
import { Application } from './models/application';
import { map } from 'rxjs/operators';
import { AppsInfo } from './models/app-info';
import { environment } from '../../../environments/environment';
import { TranslateApplicationService } from './translate-application-service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationInfoService extends RestCallService {

  constructor(
    public httpClient: HttpClient,
    public toastr: ToastrService,
    public notificationService: NotificationService,
    public translate: TranslateApplicationService) {
    super(httpClient, 'TranslateService', toastr, notificationService, translate);
  }

  public getAppInfo() {
    return this.get<any>('applications-info');
  }

  public getApplicationByName(): Observable<Application> {
    return this.getAppInfo().pipe(
      map(model => {
        if (model.success) {
          let appsInfo: AppsInfo = JSON.parse(model.data);
          return appsInfo.applications.find(p => p.application == window["applicationId"]);
        }
      }),
    );
  }

}
