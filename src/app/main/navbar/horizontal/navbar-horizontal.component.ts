import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MainComponent } from '../../main.component';

@Component({
    selector     : 'app-navbar-horizontal',
    templateUrl  : './navbar-horizontal.component.html',
    styleUrls    : ['./navbar-horizontal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppNavbarHorizontalComponent implements OnInit, OnDestroy
{
    constructor(private appMainComponent: MainComponent)
    {
    }

    ngOnInit()
    {
        this.appMainComponent.addClass('app-nav-bar-horizontal');
    }

    ngOnDestroy()
    {
        this.appMainComponent.removeClass('app-nav-bar-horizontal');
    }
}
