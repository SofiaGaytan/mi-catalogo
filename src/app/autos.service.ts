import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Automovil } from './models';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private url:string = 'https://catalogo-autos.herokuapp.com/api/autos';
  constructor(private http: HttpClient) { }

  getAutos():Observable<any>{
    return this.http.get<any>(this.url);
  }

  updateAuto(auto:Automovil):Observable<any>{
    return this.http.put<any>(`${this.url}/${auto._id}`,auto);
  }

  addAuto(auto:Automovil):Observable<any>{
    return this.http.post<any>(this.url,auto);
  }

  deleteAuto(auto:Automovil):Observable<any>{
    return this.http.delete<any>(`${this.url}/${auto._id}`);
  }

}
