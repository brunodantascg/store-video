import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Films } from 'src/app/films';
import { FilmsService } from 'src/app/films.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  titleEdit = 'Editar Filme';

  formEdit!: FormGroup;
  submittedEdit = false;

  film: Films[] = [];

  constructor(
    private filmsService: FilmsService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.route.params
    .pipe(
      map((params: any) => params['id'] ),
      switchMap(id => this.filmsService.loadById(id))
    )
    .subscribe(films => this.updateForm(films));
  
    this.filmsService.getList()
    .subscribe(dados => this.film = dados);

    this.formEdit = this.fb.group({
      id: [null],
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

  onCancelEdit() {
    this.submittedEdit = false;
    this.formEdit.reset();
  }

  onSubmitEdit() {
    this.submittedEdit = true;
    console.log(this.formEdit.value);
    if(this.formEdit.valid){
      console.log('submit');
      if(this.formEdit.value.id) {
        this.filmsService.updateFilms(this.formEdit.value).subscribe(
          success => console.log('Sucesso'),
          error => console.error(error),
          () => console.log('request completo')
        );
      } else {
        this.filmsService.create(this.formEdit.value).subscribe(
          success => console.log('Sucesso'),
          error => console.error(error),
          () => console.log('request completo')
        );
        }
    }
  }

  updateForm(films: any) {
    this.formEdit.patchValue({
      id: films.id,
      nome: films.nome,
      ano: films.ano,
      genero: films.genero,
      classificacao: films.classificacao,
      duracao: films.duracao,
      idioma: films.idioma,
      produtora: films.produtora,
      pais: films.pais
    })
  }

}
