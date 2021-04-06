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

/*
  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.value){
      console.log('submit');
    }

  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
    // console.log('onCancel')
  }
*/
  getFilms(): void {

  }

  addFilms(): void {

  }
}
