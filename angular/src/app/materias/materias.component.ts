import { Component, OnInit } from '@angular/core';

import { MateriasService } from '../materias/materias.service';
@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit {
  
  materias: any[] = [];
  constructor(private materiasService: MateriasService) { }

  ngOnInit() {
  	this.materias = this.materiasService.getMaterias();
  }

}
