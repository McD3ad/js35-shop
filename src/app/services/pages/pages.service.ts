import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { IResponse, Page } from 'src/app/models';

@Injectable()
export class PagesService {

  constructor(private http: HttpClient) { }

  public home(): Observable<any> {
    return this.http.get<IResponse<Page>>(environment.API);
  }
}
