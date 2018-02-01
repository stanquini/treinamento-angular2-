//import { IFormCanDeactivate } from './iform-candeactivate';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { IformCanDeactivate } from './iform-candeactive';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IformCanDeactivate> {
  canDeactivate(
    component: IformCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    
    console.log('guarda de DESATIVACAO');

    //return component.podeMudarRota ? component.podeMudarRota() : true;
    return component.podeDesativar ? component.podeDesativar() : true;

  }
}