import { Component, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2, ViewChild, Input } from '@angular/core';
import { style, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { Subscription } from 'rxjs';
import { AppConfigService } from '../../services/config.service';
import { appAnimations } from '../../animations';
import { NavigationService } from '../navigation/navigation.service';
import { MatColors } from '../../matColors';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector   : 'app-theme-options',
    templateUrl: './theme-options.component.html',
    styleUrls  : ['./theme-options.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations : appAnimations
})
export class AppThemeOptionsComponent implements OnInit, OnDestroy
{
    //@ViewChild('openButton', {static: true}) openButton;
    //@ViewChild('panel', {static: true}) panel;
    //@ViewChild('overlay', {static: true}) overlay: ElementRef;
    
    @Input() selectedPalette = '';
    @Input() selectedHue = '';
    view = 'palettes';

    colors: any;
    hues: string[];

    public player: AnimationPlayer;
    appSettings: any;

    onSettingsChanged: Subscription;

    @HostBinding('class.bar-closed') barClosed: boolean;

    constructor(
        private animationBuilder: AnimationBuilder,
        private appConfig: AppConfigService,
        private navigationService: NavigationService,
        private renderer: Renderer2,
        private appConfigService: AppConfigService
    )
    {
        this.colors = MatColors.all;
        this.hues = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'];
        /*this.barClosed = true;

        this.onSettingsChanged =
            this.appConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.appSettings = newSettings;
                    }
                );*/
    }

    ngOnInit()
    {
        /*this.renderer.listen(this.overlay.nativeElement, 'click', () => {
            this.closeBar();
        });*/
    }

    selectPalette(palette)
    {
        this.selectedPalette = palette;
        //this.updateSelectedColor();
        this.view = 'hues';        
    }

    selectHue(hue)
    {
        this.selectedHue = hue;
        //this.updateSelectedColor();        
        const colorClasses = this.appConfigService.onSettingsChanged.value.colorClasses;
        colorClasses.navbar = `mat-${this.selectedPalette}-${this.selectedHue}-bg`;
    

        this.appConfigService.setSettings({ colorClasses });
    }

    onSettingsChange()
    {
        this.appConfig.setSettings(this.appSettings);
    }

    /*closeBar()
    {
        this.player =
            this.animationBuilder
                .build([
                    style({transform: 'translate3d(0,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(100%,0,0)'}))
                ]).create(this.panel.nativeElement);

        this.player.play();

        this.player.onDone(() => {
            this.barClosed = true;
        });
    }*/

    openBar()
    {
        /*this.barClosed = false;

        this.player =
            this.animationBuilder
                .build([
                    style({transform: 'translate3d(100%,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(0,0,0)'}))
                ]).create(this.panel.nativeElement);

        this.player.play();*/
    }

    ngOnDestroy()
    {
        //this.onSettingsChanged.unsubscribe();
    }

    onMenuOpen()
    {        
        this.view = 'palettes';
    }
}
