import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Films } from 'src/app/films';
import { FilmsService } from 'src/app/films.service';

@Component({
  selector: 'app-list-of-films',
  templateUrl: './list-of-films.component.html',
  styleUrls: ['./list-of-films.component.css']
})
export class ListOfFilmsComponent implements OnInit {

  titleList = 'Lista de Filmes';

  film: Films[] = [];

  //film: Films[] = FILMS;

  /* films: Films = {
    id: 1,
    nome: 'A lagoa azul',
    ano: 1980,
    genero: 'Drama',
    classificacao: 'Todas as idades',
    duracao: '2h 10m',
    idioma: 'Português (Brasil) ',
    produtora: 'Globo Filmes',
    pais: 'EUA',
    };*/

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    //this.getFilms();
    this.filmsService.getList().subscribe(dado => this.film = dado);
  }

  //getFilms(): void {
  //  this.filmsService.getFilms().subscribe(films => this.film = films);
  //}

}
