import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiURL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  /* getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  } */

  getProducts() {
    return this.http.get(this.apiURL);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }

  updateProduct(id: number, productData: Partial<Product>): Observable<Product> {
    return this.http.patch<Product>(`${this.apiURL}/${id}`, productData);
  }

}
