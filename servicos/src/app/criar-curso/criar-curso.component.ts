import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]
  /*
     * Quando quiser que seja criado uma instancia para o componente adicionar o providers: [CursosService] no decorator @Component
     * Se quiser somente uma instancia é necessario configurar no app.module   providers: [CursosService]  (padrão Singleton)
  */
})
export class CriarCursoComponent implements OnInit {

  constructor(private cursoService: CursosService) { }

  cursos: string[] = [];

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

  onAddCurso(curso: string){
    
    this.cursoService.addCurso(curso);
  }
}