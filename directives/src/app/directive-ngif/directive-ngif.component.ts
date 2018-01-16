import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  templateUrl: './directive-ngif.component.html',
  styleUrls: ['./directive-ngif.component.css']
})
export class DirectiveNgifComponent implements OnInit {

  cursos: string[] = ["Angular 2"];

  mostrarCursos: boolean = false;

  constructor() { }

  onMostrarCursos() {
    
    this.mostrarCursos = !this.mostrarCursos;
  }

  ngOnInit() {
  }

}
