import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import {FlexLayoutModule } from '@angular/flex-layout';
import { ColorPickerModule } from 'ngx-color-picker';
import { TranslateModule } from '@ngx-translate/core';
import { AppNavbarVerticalService } from '../../main/navbar/vertical/navbar-vertical.service';

import { AppTranslationLoaderService } from '../services/translation-loader.service';
import { AppMatchMedia } from '../services/match-media.service';

import { AppMatSidenavHelperDirective, AppMatSidenavTogglerDirective } from '../directives/app-mat-sidenav-helper/app-mat-sidenav-helper.directive';
import { AppMatSidenavHelperService } from '../directives/app-mat-sidenav-helper/app-mat-sidenav-helper.service';
import { AppPerfectScrollbarDirective } from '../directives/app-perfect-scrollbar/app-perfect-scrollbar.directive';
import { AppIfOnDomDirective } from '../directives/app-if-on-dom/app-if-on-dom.directive';
import { AppPipesModule } from '../pipes/pipes.module';
import { ControlModule } from '../controls/control.module';
import { NgPrimeModule } from './ngprime.module';


@NgModule({
  declarations: [
    AppMatSidenavHelperDirective,
    AppMatSidenavTogglerDirective,
    AppPerfectScrollbarDirective,
    AppIfOnDomDirective
  ],
  imports: [
    ControlModule,
    NgPrimeModule,
    CommonModule,
    ColorPickerModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ControlModule,
    NgPrimeModule,
    ColorPickerModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppMatSidenavHelperDirective,
    AppMatSidenavTogglerDirective,
    AppPerfectScrollbarDirective,
    AppIfOnDomDirective,
    AppPipesModule
  ],
  providers: [
    AppMatchMedia,
    AppNavbarVerticalService,
    AppTranslationLoaderService,
    AppMatSidenavHelperService
  ]
})
export class SharedModule { }
