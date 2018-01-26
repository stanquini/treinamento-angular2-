import { Injectable, EventEmitter } from "@angular/core";


@Injectable()
export class CursosService {

  private cursos: string[] = ['Python', 'NodeJS', 'FrontEnd'];

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  constructor() {
    
    console.log('cursosService');
  }

  getCursos() {

    return this.cursos;
  }

  addCurso(curso: string){

    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}