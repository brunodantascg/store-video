import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { AddFilmsComponent } from './layout/add-films/add-films.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { EditComponent } from './layout/edit/edit.component';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { HomeComponent } from './layout/home/home.component';
import { ListOfFilmsComponent } from './layout/list-of-films/list-of-films.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    children: [
      { path: 'homePage', component: HomePageComponent},
      { path: 'addFilms', component: AddFilmsComponent},
      { path: 'addFilms/edit/:id', component: EditComponent}, 
      { path: 'listFilms', component: ListOfFilmsComponent}      
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent},
      { path: 'create-account', component: CreateAccountComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
