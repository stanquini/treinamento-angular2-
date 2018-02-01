import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../login/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean |
           Observable<boolean> |
           Promise<boolean> {
            
      if(this.authService.usuarioEstaAutenticado()) {
        return true;
      }

      this.router.navigate(['/login'])
      
      return false; 
  }
}
