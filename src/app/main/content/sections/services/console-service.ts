import { Injectable } from '@angular/core';
import { RestCallService } from '../../../../core/services/rest-call/rest-call.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { IConsole } from '../Interfaces/IConsole';
import { TranslateService } from '../../../../core/services/translate-service';
import { TranslateApplicationService } from '../../../../core/translate/translate-application-service';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService extends RestCallService {

  constructor(
    public httpClient: HttpClient,
    public toastr: ToastrService,
    public notificationService: NotificationService,
    public translate: TranslateApplicationService
  ) {
    super(httpClient, 'TemplateSessionApi', toastr, notificationService, translate);
  }

  public getList() {
    return this.get<IConsole[]>('Console/GetConsoles');
  }

  public createConsole(data: IConsole) {
    return this.post('Console/CreateConsole', data);
  }

  public updateConsole(data: IConsole) {
    return this.put('Console/UpdateConsole', data);
  }
}
