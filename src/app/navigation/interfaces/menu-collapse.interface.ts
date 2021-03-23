import { MenuIntemInterface } from './menu-item.interface';

export interface MenuCollapseInterface 
{
    id: string,
    title: string;
    translate?: string;
    type: 'collapse';
    icon?: string; //references icon material
    children: MenuIntemInterface[]
}