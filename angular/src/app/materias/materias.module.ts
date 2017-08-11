import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasComponent } from './materias.component';
import { MateriaComponent } from './materia/materia.component';
import { FiltrosComponent } from './filtros/filtros.component';

import { MateriasService } from './materias.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [    
    MateriasComponent,
    MateriaComponent,
    FiltrosComponent
   ],
  exports:[ 
  	MateriasComponent,
  	MateriaComponent,
  	FiltrosComponent
  ], 
  providers:[
    MateriasService
  ],
})
export class MateriasModule { }
