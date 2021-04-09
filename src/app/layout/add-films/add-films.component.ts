import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Films } from 'src/app/films';
import { FilmsService } from 'src/app/films.service';

@Component({
  selector: 'app-add-films',
  templateUrl: './add-films.component.html',
  styleUrls: ['./add-films.component.css']
})
export class AddFilmsComponent implements OnInit {

  titleAdd = "Adicionar Filme";

  form!: FormGroup;
  submitted = false;

  filmSelect!: Films;

  film: Films[] = [];

  constructor(
    private filmsService: FilmsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.filmsService.getList()
    .subscribe(dados => this.film = dados);

    this.form = this.fb.group({
      nome: [null, [Validators.required]],
      ano: [null, [Validators.required]],
      genero: [null, [Validators.required]],
      classificacao: [null, [Validators.required]],
      duracao: [null, [Validators.required]],
      idioma: [null, [Validators.required]],
      produtora: [null, [Validators.required]],
      pais: [null, [Validators.required]]
    });
  }
  
  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      console.log('submit')
      this.filmsService.create(this.form.value).subscribe(
        success => console.log('Sucesso'),
        error => console.error(error),
        () => console.log('request completo')
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    //console.log('onCancel')
  }

  onEdit(id: number){
    this.router.navigate(['edit', id], {relativeTo: this.route});
  }

  onDelete() {
    this.filmsService.remove(this.filmSelect.id).subscribe();
  }

}
