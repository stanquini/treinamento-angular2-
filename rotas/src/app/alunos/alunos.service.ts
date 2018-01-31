import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  constructor() { }
  
  private alunos: any[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'}
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id) {

    let cursos = this.getAlunos();
    let i, alunosLen;
    for (i=0,alunosLen = cursos.length; i < alunosLen; i++) {
      let curso = cursos[i];
      if(curso.id == id) {
        return curso  
      }
    }
    return null;
  }
}
