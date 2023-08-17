import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductsReq } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductsReq> {
    return this.http.get<ProductsReq>(this.productsUrl);
  }

  getSingleProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.productsUrl + `/${id}`);
  }
}
