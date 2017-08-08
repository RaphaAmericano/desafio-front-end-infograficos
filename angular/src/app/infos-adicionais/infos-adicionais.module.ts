import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfosAdicionaisComponent } from './infos-adicionais.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	InfosAdicionaisComponent
  ],
  exports: [
  	InfosAdicionaisComponent
  ]
})
export class InfosAdicionaisModule { }
