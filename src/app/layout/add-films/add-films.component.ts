import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Films } from 'src/app/films';
import { FilmsService } from 'src/app/films.service';

@Component({
  selector: 'app-add-films',
  templateUrl: './add-films.component.html',
  styleUrls: ['./add-films.component.css']
})
export class AddFilmsComponent implements OnInit {

  titleAdd = "Adicionar Filme";

  film: Films[] = [];

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.filmsService.getList()
    .subscribe(dados => this.film = dados);
  }

  getFilms(): void {

  }

  delete(): void {
    // this.film = this.film.filter(h => h !== film);
   // this.filmsService.deleteFilms(film.id).subscribe();
  }

  addFilms(): void {

  }
}
