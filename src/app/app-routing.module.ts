import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


const routes: Routes = 
[
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'movies',
    component: MoviesListComponent
  },
  {
    path: 'movie-details/:imdbID',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
