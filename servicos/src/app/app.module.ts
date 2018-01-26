//Para modulo root importar o import { BrowserModule } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
//import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
//import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    AppComponent//,
    //ReceberCursoCriadoComponent,
   // CursosComponent//,
    //CriarCursoComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]

})
export class AppModule { }
