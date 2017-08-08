import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapsContainerComponent } from './google-maps-container.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	GoogleMapsContainerComponent
  ],
  exports: [
  	GoogleMapsContainerComponent
  ]
})
export class GoogleMapsContainerModule { }
