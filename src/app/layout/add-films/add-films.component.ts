import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/films';
import { FilmsService } from 'src/app/films.service';

@Component({
  selector: 'app-add-films',
  templateUrl: './add-films.component.html',
  styleUrls: ['./add-films.component.css']
})
export class AddFilmsComponent implements OnInit {

  film: Films[] = [];

  //film: Films[] = FILMS;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    //this.getFilms();
  }

  //getFilms(): void {
  //  this.filmsService.getFilms().subscribe(films => this.film = films);
  //}

  addFilms(): void {

  }

}
