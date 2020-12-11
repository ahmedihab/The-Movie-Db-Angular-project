import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router'
import {MovieService} from'../movie.service'
@Component({
  selector: 'app-movie-detiles',
  templateUrl: './movie-detiles.component.html',
  styleUrls: ['./movie-detiles.component.css']
})
export class MovieDetilesComponent implements OnInit {
    id:any ;
    movieDetils:any;
    TvDetils:any;
    isLoding:boolean = false
    TopTen:any [] = [] ;
    ImgUrl:string = "https://image.tmdb.org/t/p/original";
  constructor( public _ActivatedRoute:ActivatedRoute ,public  _MovieService:MovieService) {
     this.id =_ActivatedRoute.snapshot.paramMap.get('id'),
     _MovieService.GetMovieId(this.id).subscribe((data)=> {
      this.movieDetils = data ;
      this.isLoding = true ;
     },(err)=>{
      console.log(err)})
      _MovieService.GetTerndingAll().subscribe((data)=>{
        for (let i=0; i < 10; i++ ) {
            this.TopTen.push(data.results[i])
        }
      })
      _MovieService.GetTv(this.id).subscribe((data1)=>{
        this.movieDetils = data1 ;
        this.isLoding = true ;
      })

   }


  ngOnInit(): void {
  }

}
