//Para modulo de funcionalidade importar o import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';


@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  //expõe e exporta o compoente para outros módulos também 
  exports: [CriarCursoComponent]//,
  //providers: [CursosService]
  
})
export class CriarCursoModule { }