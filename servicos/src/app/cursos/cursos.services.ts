import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

  getCursos() {
    
    return ['Python', 'NodeJS', 'FrontEnd'];
  }
}