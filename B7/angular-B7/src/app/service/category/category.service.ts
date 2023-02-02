import {Injectable} from '@angular/core';

import {Category} from "../../model/category";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {
  }
  getAll():Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/category');
  }
  findByID(id:any):Observable<Category>{
    return this.http.get<Category>(API_URL+'/category?id='+id)
  }
}
