import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ng-for',
  templateUrl: './directive-ng-for.component.html',
  styleUrls: ['./directive-ng-for.component.css']
})
export class DirectiveNgForComponent implements OnInit {

  cursos: string[] = ["Angular 2", "Java", "Python"];

  constructor() { }

  ngOnInit() {
  }

}
