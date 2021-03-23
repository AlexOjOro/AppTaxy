import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouteReuseStrategy } from '@angular/router';
import { AppConfigService } from '../../core/services/config.service';
import { AppTranslationLoaderService } from 'src/app/core/services/translation-loader.service';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { LogService } from '../content/sections/websocketclient/notification.services';
import { NotificationService } from '../../core/services/notification/notification.service';
import { ApplicationInfoService } from '../../core/translate/application-info.service';
import { TransactionResult } from '../../core/services/interfaces/transaction-result';
import { AppsInfo } from '../../core/translate/models/app-info';
import { environment } from '../../../environments/environment';
import { TranslateApplicationService } from '../../core/translate/translate-application-service';
import { Application } from '../../core/translate/models/application';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class AppToolbarComponent {
  userStatusOptions: any[];
  languages: Array<any> = [];
  selectedLanguage: any;
  showLoadingBar: boolean;
  horizontalNav: boolean;
  username: string;

  constructor(
    private router: Router,
    private appConfig: AppConfigService,
    private translate: TranslateApplicationService,
    private adal: MsAdalAngular6Service,
    private applications: ApplicationInfoService
    //private logService: LogService,
    //private notification: NotificationService,
  ) {

    this.applications.getApplicationByName().subscribe(
      (result: Application) => {
        result.languages.forEach(p => {
          var language = {
            id: p.id,
            title: p.language,
            flag: p.code,
            applicationId: result.id
          };
          this.languages.push(language);
        });

        this.selectLanguage();
      },
      (error) => {
        console.log(error);
      }
    );

    /*this.languages = [
      {
        'id': 'en',
        'title': 'English',
        'flag': 'us'
      },
      {
        'id': 'es',
        'title': 'Español',
        'flag': 'es'
      }
    ];*/

    router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          this.showLoadingBar = true;
        }
        if (event instanceof NavigationEnd) {
          this.showLoadingBar = false;
        }
      });

    this.appConfig.onSettingsChanged.subscribe((settings) => {
      this.horizontalNav = settings.layout.navigation === 'top';
    });

    if (this.adal.isAuthenticated)
      this.username = this.adal.userInfo.userName;

    /*logService.messages.subscribe(msg => {
      this.notification.addAlert(
        {
          icon: 'all_inbox',
          title: 'Track',
          message: msg,
          shown: true
        }
      )
    });*/
  }

  selectLanguage(): void{
    let indexLang = 0;
    if (this.languages != undefined) {
      if (navigator.language.split('-').length > 0) {
        indexLang = this.languages.findIndex(lang => lang.flag === navigator.language.split('-')[0]);
      }
      else {
        indexLang = this.languages.findIndex(lang => lang.flag === navigator.language);
      }

      if (indexLang < 0) {
        this.selectedLanguage = this.languages[0];
      } else {
        this.selectedLanguage = this.languages[indexLang];
      }
    }
  }

  setLanguage(lang) {
    // Set the selected language for toolbar
    this.selectedLanguage = lang;
    // selected language for translations
    this.translate.use(lang);
  }

  logOut(): void {
    if (this.adal.isAuthenticated)
      this.adal.logout();
  }
}
