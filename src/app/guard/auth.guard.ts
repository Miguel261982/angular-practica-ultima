import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  GuardResult,  MaybeAsync,  Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getUser().pipe(
      take(1),
      map(user =>{
        if (user) {
          return true;
        }else{
          this.router.navigate(['/home']);
          return false;
        }
      })
    );
  }
}
