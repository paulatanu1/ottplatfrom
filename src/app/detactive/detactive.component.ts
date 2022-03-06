import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  closeResult: string = '';
  movies:any=[
    {movImg:'../assets/images/thriller1.jpg',movTitle:"Dracula Sir",movDec:"this is decription",inWatch:false},
    {movImg:'../assets/images/thriller2.jpg',movTitle:"Byomkesh Gotro",movDec:"this is decription2",inWatch:false},
    {movImg:'../assets/images/thriller3.jpg',movTitle:"Mukhosh",movDec:"this is decription3",inWatch:false},
    {movImg:'../assets/images/thriller4.jpg',movTitle:"Barna Porichoy",movDec:"this is decription3",inWatch:false},
    {movImg:'../assets/images/thriller5.jpg',movTitle:"Chokher Bali",movDec:"this is decription3",inWatch:false},
    {movImg:'../assets/images/thriller6.jpg',movTitle:"Rosogolla",movDec:"this is decription3",inWatch:false}, //array2
  ];
  watchlist1:any=[];
  watchlist:any=[]; //array1

  constructor(private modalService: NgbModal) { }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 

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


private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

}