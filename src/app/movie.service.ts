import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _HttpClient:HttpClient) { }

   GetTerndingAll():Observable<any>
   {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=c03a1ffd7f00fe2d6cb5ec83a721be12")

   }

   GetTerndingTv():Observable<any>
   {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=c03a1ffd7f00fe2d6cb5ec83a721be12")
   }

   GetLatsetMovie():Observable<any>
   {
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/popular?api_key=c03a1ffd7f00fe2d6cb5ec83a721be12")
   }

   GetNow_playingMovie():Observable<any>
   {
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c03a1ffd7f00fe2d6cb5ec83a721be12")
   }

   GetTop_ratedMovie():Observable<any>
   {
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/top_rated?api_key=c03a1ffd7f00fe2d6cb5ec83a721be12")
   }

   GetLupcomingMovie():Observable<any>
   {
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/upcoming?api_key=c03a1ffd7f00fe2d6cb5ec83a721be12")
   }


   GetMovieId(id):Observable<any>
   {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c03a1ffd7f00fe2d6cb5ec83a721be12`)
   }

   GetTv(id):Observable<any>
   {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=c03a1ffd7f00fe2d6cb5ec83a721be12`)
   }
}
