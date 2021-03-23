import { Injectable } from '@angular/core';
import { Alert } from '../../../main/quick-panel/alert.model';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    public alerts: BehaviorSubject<Alert[]> = new BehaviorSubject([]);
    constructor(private toastr : ToastrService){

    }
    public addAlert(alert: Alert) {
        const getAlerts = this.alerts.value;
        getAlerts.push(alert);
        this.alerts.next(getAlerts);
        if(alert.title.toUpperCase().trim() == "SUCCESS"){
            this.toastr.success(alert.title,alert.message);
        }
        if(alert.title.toUpperCase().trim() == "ERROR"){
            this.toastr.error(alert.title,alert.message);
        }
        if(alert.title.toUpperCase().trim() == "WARNING"){
            this.toastr.warning(alert.title,alert.message);
        }
    }
}
