import { Injectable } from '@angular/core';
import { Films } from './films';
//import { FILMS } from './mock-films';

import { Observable, of } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private filmsUrl = 'api/films'; 

  constructor(
    private http: HttpClient) { }

  getFilms(): Observable <Films[]> {
    return this.http.get<Films[]>(this.filmsUrl)
      .pipe(

      );
  }
}
