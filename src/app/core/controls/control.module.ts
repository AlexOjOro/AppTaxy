import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSaveComponent } from './button-save/button-save.component';
import { TranslatePipe } from '../pipes/translate-pipe';
import { TranslateService } from '@ngx-translate/core';
import { AppPipesModule } from '../pipes/pipes.module';
import { ButtonCancelComponent } from './button-cancel/button-cancel.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonEditComponent } from './button-edit/button-edit.component';
import { JabilSelectComponent } from './jabil-select/jabil-select.component';
import { JabilInputComponent } from './jabil-input/jabil-input.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { JabilCheckBoxComponent } from './jabil-check-box/jabil-check-box.component';
import { JabilTextAreaComponent } from './jabil-text-area/jabil-text-area.component';



export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    ButtonSaveComponent,
    ButtonCancelComponent,
    ButtonAddComponent,
    ButtonEditComponent,
    JabilSelectComponent,
    JabilInputComponent,
    JabilCheckBoxComponent,
    JabilTextAreaComponent
  ],
  imports: [
    CommonModule,
    AppPipesModule,
    NgSelectModule,
  ],
  exports: [
    ButtonAddComponent,
    ButtonEditComponent,
    ButtonSaveComponent,
    ButtonCancelComponent,
    JabilSelectComponent,
    JabilInputComponent,
    JabilCheckBoxComponent,
    JabilTextAreaComponent
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
})
export class ControlModule { }
