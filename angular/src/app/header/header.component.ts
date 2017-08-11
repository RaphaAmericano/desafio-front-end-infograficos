import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo = {
  	link_foto: './img/logo-minuto-news.jpg',
  	nome_alt: 'Minuto News Logo'
  };
  itens_menu:any[] = [ 
    {
      titulo: 'Brasil',
      sub_menus: [
        'Submenu 01',
        'Submenu 02',
        'Submenu 03',
        'Submenu 04',
      ]
    },
    {
      titulo: 'Mundo',
      sub_menus: null
    },
    {
      titulo: 'Blogs',
      sub_menus: null
    },
    {titulo: 'Assine',
      sub_menus: null
    },
   ];
  
  constructor() { }

  ngOnInit() {
  }

}
