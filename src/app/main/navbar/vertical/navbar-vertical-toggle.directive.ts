import { Directive, HostListener, Input } from '@angular/core';
import { AppNavbarVerticalService } from './navbar-vertical.service';
import { AppNavbarVerticalComponent } from './navbar-vertical.component';

@Directive({
    selector: '[appNavbarVertical]'
})
export class AppNavbarVerticalToggleDirective
{
    @Input() appNavbarVertical: string;
    navbar: AppNavbarVerticalComponent;

    constructor(private navbarService: AppNavbarVerticalService)
    {
    }

    @HostListener('click')
    onClick()
    {
        this.navbar = this.navbarService.getNavBar();

        if ( !this.navbar[this.appNavbarVertical] )
        {
            return;
        }

        this.navbar[this.appNavbarVertical]();
    }
}
