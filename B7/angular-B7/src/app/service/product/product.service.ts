import { Injectable } from '@angular/core';
import {Product} from "../../model/product";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/product`)
  }
  saveProduct(product:Product):Observable<Product>{
     return this.http.post<Product>(`${API_URL}/product`,product)
  }

  findByID(id: string | null):Observable<Product>{
    return this.http.get<Product>(`${API_URL}/product/${id}`)
  }
  removeByID(id: string | null):Observable<Product> {
    return  this.http.delete<Product>(`${API_URL}/product/${id}`)
  }
}
