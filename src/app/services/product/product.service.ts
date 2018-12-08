import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IResponse, Product } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products$: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.products$ = new BehaviorSubject<any>([]);
  }

  public index() {
    this.http.get<IResponse<Product[]>>(`${environment.API}/products`).subscribe(data => {
      console.log(data);
    });
  }

  public show(id) {
    // GET
  }

  public store(form) {
    // POST
  }

  public update(id, form) {
    // PATCH
  }

  public destroy(id) {
    // DELETE
  }
}
