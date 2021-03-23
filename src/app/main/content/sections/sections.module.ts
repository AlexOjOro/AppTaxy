import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { SectionsRoutingModule } from './sections.routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule, ngxLoadingAnimationTypes  } from 'ngx-loading';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConsoleComponent } from './console/console.component';
import { ConsoleDetail } from './console/console-detail/console-detail';
import { NewServiceComponent } from './new-service/new-service.component';
import { SiteComponent } from './site/site.component';
import { BuildingComponent } from './building/building.component';
import { ProjectComponent } from './project/project.component';
import { CostCenterComponent } from './cost-center/cost-center.component';
import { AOMComponent } from './aom/aom.component';



@NgModule({
  entryComponents: [
    ConsoleDetail
  ],
  imports: [
    SharedModule,
    SectionsRoutingModule,
    CommonModule,
    ModalModule.forRoot(),
    NgxLoadingModule.forRoot({
      fullScreenBackdrop: true,
      backdropBackgroundColour: '3px'
    })
  ],
  declarations: [
    CatalogComponent,
    ConsoleComponent,
    ConsoleDetail,
    NewServiceComponent,
    SiteComponent,
    BuildingComponent,
    ProjectComponent,
    CostCenterComponent,
    AOMComponent
  ]
})
export class SectionsModule { }
