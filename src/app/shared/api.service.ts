import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public _url = 'http://localhost:3000/posts/';

  constructor(private http : HttpClient) { }

  postEmployee(data : any){
    return this.http.post<any>(this._url,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getEmployee(){
    return this.http.get<any>(this._url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateEmployee(data : any, id : number){
    return this.http.put<any>(this._url+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEmployee(id : number){
    return this.http.delete<any>(this._url+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
