import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: any[]

  constructor(private service: MoviesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit()
  {
    this.activatedRoute.queryParams
    .subscribe(qparams=>this.service.searchMovies(qparams['q']).subscribe( resp=>this.movies=resp.Search))
    
  }

}
