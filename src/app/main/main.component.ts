import { 
  Component, 
  ElementRef, 
  HostBinding, 
  Inject, 
  OnDestroy, 
  OnInit, 
  Renderer2, 
  ViewEncapsulation, 
  HostListener
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { AppConfigService } from '../core/services/config.service';
import { AppMatSidenavHelperService } from '../core/directives/app-mat-sidenav-helper/app-mat-sidenav-helper.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  onSettingsChanged: Subscription;
  appSettings: any;
  @HostBinding('attr.app-layout-mode') layoutMode;

  constructor(
    private appConfig: AppConfigService,
    private platform: Platform,
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    private appMatSidenavHelperService : AppMatSidenavHelperService,
    @Inject(DOCUMENT) private document: any
  ) { 
    this.onSettingsChanged =
            this.appConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                      console.log(newSettings);
                        this.appSettings = newSettings;
                        this.layoutMode = this.appSettings.layout.mode;
                    }
                );

    if ( this.platform.ANDROID || this.platform.IOS )
    {
        this.document.body.className += ' is-mobile';
    }
  }

  ngOnInit() {
  }

  ngOnDestroy()
  {
      this.onSettingsChanged.unsubscribe();
  }

  addClass(className: string)
  {
      this._renderer.addClass(this._elementRef.nativeElement, className);
  }

  removeClass(className: string)
  {
      this._renderer.removeClass(this._elementRef.nativeElement, className);
  }

  @HostListener('window:keydown.control.Enter', ['$event'])
  keyEvent(event: KeyboardEvent) {    
    this.appMatSidenavHelperService.getSidenav('config-app').toggle();
  }

}
