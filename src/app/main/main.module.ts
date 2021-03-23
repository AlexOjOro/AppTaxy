import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { SharedModule } from '../core/modules/shared.module';
import { MainComponent } from './main.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppNavbarVerticalComponent } from './navbar/vertical/navbar-vertical.component';
import { AppNavbarHorizontalComponent } from './navbar/horizontal/navbar-horizontal.component';
import { AppToolbarComponent } from './toolbar/toolbar.component';
import { AppNavbarVerticalToggleDirective } from './navbar/vertical/navbar-vertical-toggle.directive';
import { AppThemeOptionsComponent } from '../core/components/theme-options/theme-options.component';
import { NavigationModule } from '../core/components/navigation/navigation.module';
import { AppQuickPanelComponent } from './quick-panel/quick-panel.component';

@NgModule({
  declarations: [
    ContentComponent,
    MainComponent,
    FooterComponent,
    AppNavbarVerticalComponent,    
    AppNavbarHorizontalComponent,
    AppToolbarComponent,
    AppNavbarVerticalToggleDirective,
    AppThemeOptionsComponent,
    AppQuickPanelComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    NavigationModule,
    CommonModule,
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
