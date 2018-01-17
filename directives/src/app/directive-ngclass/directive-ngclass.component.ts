import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngclass',
  templateUrl: './directive-ngclass.component.html',
  styleUrls: ['./directive-ngclass.component.css']
})
export class DirectiveNgclassComponent implements OnInit {

  meuFavorito: boolean = false;

  constructor() { }

  onClick(){
    
    this.meuFavorito = !this.meuFavorito;
  }

  ngOnInit() {
  }

}
