import { NgModule, APP_INITIALIZER } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { AppNavVerticalItemComponent } from './vertical/nav-item/nav-vertical-item.component';
import { AppNavVerticalCollapseComponent } from './vertical/nav-collapse/nav-vertical-collapse.component';
import { AppNavVerticalGroupComponent } from './vertical/nav-group/nav-vertical-group.component';
import { AppNavHorizontalItemComponent } from './horizontal/nav-item/nav-horizontal-item.component';
import { AppNavHorizontalCollapseComponent } from './horizontal/nav-collapse/nav-horizontal-collapse.component';
import { CommonModule } from '@angular/common';
import { AppPipesModule } from '../../pipes/pipes.module';
import { TranslateApplicationService } from '../../translate/translate-application-service';

@NgModule({
  declarations: [
    AppNavHorizontalCollapseComponent,
    AppNavHorizontalItemComponent,
    AppNavVerticalGroupComponent,
    AppNavVerticalCollapseComponent,
    AppNavVerticalItemComponent,
    NavigationComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    CommonModule,
    AppPipesModule,
  ],
  providers: [
    TranslateApplicationService
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
