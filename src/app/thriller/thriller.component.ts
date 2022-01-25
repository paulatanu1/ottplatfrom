import { Component, OnInit } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.scss']
})
export class ThrillerComponent implements OnInit {
  movieName:string='';
  moviedetails:string='';
  movieSelected:boolean=false;
  movTitle:string='';
  movDec:string='';
  onclickrmv:boolean=false;
  movImg:any='';
  movies:any=[
    {movImg:'../assets/images/thriller1.jpg',movTitle:"ABC",movDec:"this is decription",inWatch:false},
    {movImg:'../assets/images/thriller2.jpg',movTitle:"DEF",movDec:"this is decription2",inWatch:false},
    {movImg:'../assets/images/thriller3.jpg',movTitle:"GHI",movDec:"this is decription3",inWatch:false},
    {movImg:'../assets/images/thriller4.jpg',movTitle:"text",movDec:"this is decription3",inWatch:false},
    {movImg:'../assets/images/thriller5.jpg',movTitle:"text2",movDec:"this is decription3",inWatch:false},{movImg:'../assets/images/thriller6.jpg',movTitle:"text",movDec:"this is decription3",inWatch:false}, //array2
  ]
  watchlist:any=[]; //array1

  constructor() { }

  ngOnInit(): void {
  }
  // onselectMovie(movName:any,MovDetails:any){
  //   this.movieSelected=true;
  //   this.movieName = movName;
  //   this.moviedetails = MovDetails;
  // }
  // onselectMovie(movTitle:any,movDec:any){
  //   this.movieSelected=true;
  //   this.movieName =movTitle;
  //   this.moviedetails =movDec;
  // }

  addFunction(item:any){
    let index = this.movies.findIndex(
      (x:any) => x.movTitle == item.movTitle && x.movDec == item.movDec
    );
    this.watchlist.push(this.movies[index]);
    
    this.movies.forEach((element:any) => {
      element.inWatch = ( this.watchlist.findIndex((elem:any)=>elem.movTitle==item.movTitle)>-1)?true:false;
    });;
    this.onclickrmv = true;
    this.movieSelected=true;
  }
  removeFunction(item:any) {
    let index = this.watchlist.findIndex(
      (x:any) => x.movTitle == item.movTitle && x.movDec == item.movDec && x.movImg == item.movImg
    );
    this.watchlist.splice(index, 1);
  }
  
}
