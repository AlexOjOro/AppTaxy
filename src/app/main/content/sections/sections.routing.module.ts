import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AOMComponent } from './aom/aom.component';
import { BuildingComponent } from './building/building.component';
import { CatalogComponent } from './catalog/catalog.component'
import { ConsoleComponent } from './console/console.component';
import { CostCenterComponent } from './cost-center/cost-center.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { ProjectComponent } from './project/project.component';
import { SiteComponent } from './site/site.component';

const routes: Routes = [
  { path: 'console', component: ConsoleComponent },
  { path: 'newService', component: NewServiceComponent },
  { path: 'site', component: SiteComponent },
  { path: 'building', component: BuildingComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'costCenter', component: CostCenterComponent },
  { path: 'aom', component: AOMComponent }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }

