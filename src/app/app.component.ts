import { Component } from '@angular/core';
import { AppSplashScreenService } from './core/services/splash-screen.service';

import { NavigationService } from './core/components/navigation/navigation.service';
import { AppNavigationModel } from './navigation/navigation.model';
//import { TranslateService } from './core/services/translate-service';
import { LogService } from './main/content/sections/websocketclient/notification.services';
import { NotificationService } from './core/services/notification/notification.service';
import { TranslateApplicationService } from './core/translate/translate-application-service';
import { ApplicationInfoService } from './core/translate/application-info.service';
import { Application } from './core/translate/models/application';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private appSplashScreen: AppSplashScreenService,
    //private translate: TranslateService,
    private translate: TranslateApplicationService,
    private appNavigationService: NavigationService,
    private applicationInfo: ApplicationInfoService
  ) {
    this.appNavigationService.setNavigationModel(new AppNavigationModel());


    this.applicationInfo.getApplicationByName().subscribe(
      (result: Application) => {
        if (result.languages.length > 0) {
          translate.use(
            {
              id: result.languages[0].id,
              title: result.languages[0].language,
              flag: result.languages[0].code,
              applicationId: result.id
            }).then(() => {
              this.translate.currentLang = result.languages[0].code;
          });
        }
      },
      (error) => { console.log(error); }
    );
    
  }
}
