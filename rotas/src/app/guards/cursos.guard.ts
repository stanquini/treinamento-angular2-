import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export class CursosGuard implements CanActivateChild {
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean |
           Observable<boolean> |
           Promise<boolean> {
      
      console.log('guarda de rota filha');

      return true;
    }
    
}