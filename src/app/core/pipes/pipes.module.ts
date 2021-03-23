import { NgModule } from '@angular/core';

import { KeysPipe } from './keys.pipe';
import { TranslatePipe } from './translate-pipe';

@NgModule({
    declarations: [
    KeysPipe,
    TranslatePipe
    ],    
    exports: [
      KeysPipe,
      TranslatePipe
    ]
})

export class AppPipesModule { }
