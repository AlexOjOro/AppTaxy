import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { TranslateService } from '../../../../services/translate-service';
import { TranslateApplicationService } from '../../../../translate/translate-application-service';

@Component({
  selector: 'app-nav-vertical-item',
  templateUrl: './nav-vertical-item.component.html',
  styleUrls: ['./nav-vertical-item.component.scss']
})
export class AppNavVerticalItemComponent implements OnInit {
  @HostBinding('class') classes = 'nav-item';
  @Input() item: any;

  public isActive: boolean = false;
  constructor(private translate: TranslateApplicationService) {
  }

  activate(): void {
    this.isActive = true;
  }
  ngOnInit() {
    console.log(this.item);
    this.item.title = this.item.translate//;this.translate.translate();
  }
}
