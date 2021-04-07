import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/films';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  film: Films[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
