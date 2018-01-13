import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs: ['nomeCurso']
})
export class InputPropertyComponent implements OnInit {

  constructor() { }
  
  @Input('nome') nomeDoCurso: string = '';

  ngOnInit() {
  }

}
