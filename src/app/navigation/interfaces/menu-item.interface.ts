export interface MenuIntemInterface 
{
    id: string,
    title: string;
    translate?: string;
    type: 'item';
    icon?: string; //references icon material
    url?: string;
    function?: any;
}