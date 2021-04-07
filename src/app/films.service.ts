import { Injectable } from '@angular/core';
import { Films } from './films';
//import { FILMS } from './mock-films';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  //private filmsUrl = 'api/films'; 

  private readonly API = `${environment.API}films`;

  constructor(private http: HttpClient) { }

  //getFilms(): Observable <Films[]> {
  //  return this.http.get<Films[]>(this.filmsUrl)
  //    .pipe(
  //    );
  //}

  getList() : Observable <Films[]> {
    return this.http.get<Films[]>(this.API)
      .pipe(
        catchError(this.handleError<Films[]>('getList', []))
      );
  }

  deleteFilms() {

  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      //this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
