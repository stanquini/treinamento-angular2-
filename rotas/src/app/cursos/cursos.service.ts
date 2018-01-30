import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Java'}
    ]
  }

  getCurso(id: number) {

    let cursos = this.getCursos();
    let i, cursosLen;
    for (i=0,cursosLen = cursos.length; i < cursosLen; i++) {
      let curso = cursos[i];
      if(curso.id == id) {
        return curso  
      }
    }
    return null;
  }

}
