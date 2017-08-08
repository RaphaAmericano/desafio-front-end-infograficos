import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { FormularioContatoComponent } from './formulario-contato.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
  	FormularioContatoComponent
  ],
  exports: [
  	FormularioContatoComponent
  ]
})
export class FormularioContatoModule { }
