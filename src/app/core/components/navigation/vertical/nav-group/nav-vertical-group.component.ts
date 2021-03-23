import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { TranslateService } from '../../../../services/translate-service';
import { TranslateApplicationService } from '../../../../translate/translate-application-service';

@Component({
    selector   : 'app-nav-vertical-group',
    templateUrl: './nav-vertical-group.component.html',
    styleUrls  : ['./nav-vertical-group.component.scss']
})
export class AppNavVerticalGroupComponent implements OnInit
{
    @HostBinding('class') classes = 'nav-group nav-item';
    @Input() item: any;

  constructor(private translate: TranslateApplicationService) {

  }

  ngOnInit() {
    this.item.title = this.item.translate;
  }

}
