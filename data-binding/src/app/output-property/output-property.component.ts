import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  decrementa() {

    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  incrementa() {
    
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  ngOnInit() {
  }

}
