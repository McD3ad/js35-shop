import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwt: JwtHelperService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.jwt.isTokenExpired()) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
