import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenService } from '../token/token.service';
import { IResponse } from 'src/app/models';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private jwt: JwtHelperService) {
  }

  login(attributes) {
    this.http.post<IResponse<any>>(environment.API + '/auth/login', attributes).subscribe((payload) => {
      TokenService.setAuthToken(payload.data.token);
      this.router.navigate(['/profile']);
    });
  }

  register() {
    //
  }

  me(): Observable<any> {
    return this.http.get<IResponse<any>>(`${environment.API}/me`);
  }

}
