import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { Automovil } from './models';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private url:string = 'https://catalogo-autos.herokuapp.com/api/autos';

  constructor(private http: HttpClient, private messageService: MessagesService) { }

  getAutos():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(()=>this.messageService.add("Autos obtenidos."))
    )
  }

  updateAuto(auto:Automovil):Observable<any>{
    return this.http.put<any>(`${this.url}/${auto._id}`,auto).pipe(
      catchError(this.handleError<any>('updateAutos')),
      tap((result)=>this.messageService.add(`Auto con ID ${result.data._id} Editado`))
    );
  }

  addAuto(auto:Automovil):Observable<any>{
    return this.http.post<any>(this.url,auto).pipe(
      catchError(this.handleError<any>('addAutos')),
      tap((result)=>this.messageService.add(`Auto con ID ${result.data._id} Agregado`))
    );
  }

  deleteAuto(auto:Automovil):Observable<any>{
    return this.http.delete<any>(`${this.url}/${auto._id}`).pipe(
      catchError(this.handleError<any>('deleteAutos')),
      tap((result)=>{
        console.log(result)
        this.messageService.add(`Auto con ID ${auto._id} Eliminado`)
      })
    );
  }

  private handleError<T>(operacion = "operacion",result?:T){
    return(error:any):Observable<T> => {
      this.messageService.add(`${operacion} fallo: ${error.message} `);
      return of(result as T);
    }
  }

}
