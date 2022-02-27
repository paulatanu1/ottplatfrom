import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detactive',
  templateUrl: './detactive.component.html',
  styleUrls: ['./detactive.component.scss']
})
export class DetactiveComponent implements OnInit {
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