import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenService {

  constructor() { }

  public static getAuthToken(): string {
    return localStorage.getItem(environment.TOKEN);
  }

  public static setAuthToken(token: string) {
    localStorage.setItem(environment.TOKEN, token);
  }

  public static getAuthHeader() {
    return {
      "Authorization": `Bearer: ${TokenService.getAuthToken()}`
    };
  }
}
