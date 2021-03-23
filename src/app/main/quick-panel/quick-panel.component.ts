import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NotificationService } from '../../core/services/notification/notification.service';
import { Alert } from './alert.model';

@Component({
    selector     : 'app-quick-panel',
    templateUrl  : './quick-panel.component.html',
    styleUrls    : ['./quick-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppQuickPanelComponent implements OnInit {
    public date: Date;
    public Alerts: Alert[] = [];

    constructor(
        private notificationService: NotificationService
    ) {
        this.date = new Date();
    }

    ngOnInit() {
        this.notificationService.alerts.subscribe(alerts => {
            this.Alerts = alerts;
        });
    }

    public showAlert(alert: Alert) {
        alert.shown = !alert.shown;
    }

    public deleteAllAlert() {
        this.notificationService.alerts.next([]);
    }
}
