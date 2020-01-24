import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService 
{
  baseUrl: string='http://www.omdbapi.com/?apikey=57b5e18e';

  constructor(private http: HttpClient) { }

  searchMovies(searchTerm: string): Observable<any>
  {
    return this.http.get(this.baseUrl, {params: {s:searchTerm}})
  }

  getMovieDetails(imdbID: string): Observable<any>
  {
    return this.http.get(this.baseUrl, {params: {i:imdbID}})
  }
}
