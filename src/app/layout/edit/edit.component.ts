import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.filmsService.getList()
    .subscribe(dados => this.film = dados);

    this.formEdit = this.fb.group({
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
      console.log('submit')
      this.filmsService.create(this.formEdit.value).subscribe(
        success => console.log('Sucesso'),
        error => console.error(error),
        () => console.log('request completo')
      );
    }
  }

}
