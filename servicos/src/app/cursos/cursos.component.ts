
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.services';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosService : CursosService;
  
  constructor() { 
    
    this.cursosService = new CursosService();
  }

  ngOnInit() {

    this.cursos = this.cursosService.getCursos();
  }

}
