import { MenuIntemInterface } from './interfaces/menu-item.interface';
import { MenuCollapseInterface } from './interfaces/menu-collapse.interface';
import { MenuGroupInterface } from './interfaces/menu-group.interface';

export class AppNavigationModel {
  public model: MenuGroupInterface[] | MenuCollapseInterface[] | MenuIntemInterface[];

  constructor() {
    this.model = [
      {
        'id': 'applications',
        'title': 'Applications',
        'translate': 'Current date',
        'type': 'group',
        'icon': 'apps',
        'children': [
          {
            'id': 'dashboards',
            'title': 'Dashboards',
            'translate': 'SERVICE',
            'type': 'collapse',
            'icon': 'dashboard',
            'children': [
              {
                'id': 'newService',
                'title': 'NewService',
                'translate': 'NAV.NEWSERVICE',
                'type': 'item',
                'url': '/main/newService',
                'icon': 'apps'
              }
            ]
          },
          {
            'id': 'catalogo',
            'title': 'Catalogo',
            'translate': 'Catalogo',
            'type': 'collapse',
            'icon': 'dashboard',
            'children': [
              {
                'id': 'site',
                'title': 'Site',
                'translate': 'Site',
                'type': 'item',
                'url': '/main/site',
                'icon': 'apps'
              },
              {
                'id': 'building',
                'title': 'Building',
                'translate': 'Building',
                'type': 'item',
                'url': '/main/building',
                'icon': 'apps'
              },
              {
                'id': 'project',
                'title': 'Project',
                'translate': 'Project',
                'type': 'item',
                'url': '/main/project',
                'icon': 'apps'
              },
              {
                'id': 'costCenter',
                'title': 'CostCenter',
                'translate': 'CostCenter',
                'type': 'item',
                'url': '/main/costCenter',
                'icon': 'apps'
              },
              {
                'id': 'aom',
                'title': 'AOM',
                'translate': 'AOM',
                'type': 'item',
                'url': '/main/aom',
                'icon': 'apps'
              }

            ]
          }
        ]
      }
    ];
  }
}

