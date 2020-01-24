import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;

  constructor(private service: MoviesService, private activatedRoute: ActivatedRoute, private spinner: NgxSpinnerService){}

  ngOnInit() 
  {
    this.activatedRoute.params.subscribe(params => {
    let id = params['imdbID'];
    this.service.getMovieDetails(id).subscribe(resp=>this.movie = resp)
  }) 
  this.spinner.show();
 
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 800);
}


  goBack()
  {
    window.history.back();
  }

}
