import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  carouselItems:any=[
    {imgsrc:"../../assets/images/slider-1.jpg"},
    {imgsrc:"../../assets/images/slider-2.jpg"},
    {imgsrc:"../../assets/images/slider-3.jpg"},
    {imgsrc:"../../assets/images/slider-4.jpg"},
    {imgsrc:"../../assets/images/slider-5.jpg"}
  ]

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }



}
