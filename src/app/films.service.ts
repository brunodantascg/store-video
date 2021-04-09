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

  //private readonly API = 'http://localhost:3000/films';

  constructor(private http: HttpClient) { }

  getList() {
    return  this.http.get<Films[]>(this.API);
  }

}

