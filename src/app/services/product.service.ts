import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, skip } from 'rxjs';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiURL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  /* getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  } */

  getProducts(limit?: number, skip?: number) {
    const params = { limit: limit?.toString() ?? '10', skip: skip?.toString() ?? '0' };
    return this.http.get(this.apiURL, { params });
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }

  updateProduct(id: number, productData: Partial<Product>): Observable<Product> {
    return this.http.patch<Product>(`${this.apiURL}/${id}`, productData);
  }

  getProductsBySearch(query: string, limit?: number, skip?: number) {
    const params = { q: query, limit: limit?.toString() ?? '10', skip: skip?.toString() ?? '0' };
    return this.http.get(`${this.apiURL}/search`, { params });
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiURL}/categories`);
  }

  getProductsByCategory(category: string, limit?: number, skip?: number) {
    const params = { limit: limit?.toString() ?? '10', skip: skip?.toString() ?? '0' };
    return this.http.get(`${this.apiURL}/category/${category}`, { params });
  }
}
