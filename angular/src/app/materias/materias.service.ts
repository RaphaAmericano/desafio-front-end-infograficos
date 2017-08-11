import { Injectable } from '@angular/core';

@Injectable()
export class MateriasService {

	private materias:any = [{
	  	data: '23/02/2015',
	  	h5: 'Titulo Qualquer',
	  	img: 'http://lorempixel.com/400/200/sports/1/',
	  	h4: 'Resumo da Materia',
	  	p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aspernatur voluptate iusto, vero tenetur consequuntur in culpa fugiat, doloremque alias deleniti unde cumque itaque nesciunt. Error in nam dicta quos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, corrupti. Omnis eveniet totam aliquam, sapiente numquam provident illo, facilis temporibus soluta dolorum maiores molestias beatae, eos repellendus ea odit dolor.'
	  	}, 
	  	{
	  	data: '21/10/2010',
	  	h5: 'Titulo Qualquer 2',
	  	img: 'http://lorempixel.com/400/200/sports/2/',
	  	h4: 'Resumo da Materia',
	  	p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aspernatur voluptate iusto, vero tenetur consequuntur in culpa fugiat, doloremque alias deleniti unde cumque itaque nesciunt. Error in nam dicta quos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, corrupti. Omnis eveniet totam aliquam, sapiente numquam provident illo, facilis temporibus soluta dolorum maiores molestias beatae, eos repellendus ea odit dolor.'
  	}]
  constructor() { }
  getMaterias(){
  	return this.materias;
  }
}
