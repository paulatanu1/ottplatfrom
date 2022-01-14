import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {
  planType:any='';
  price:any='';
  stream_device:any='';
  connect_device:any='';
  planList:any='';
  items:any=''
  constructor(private route:ActivatedRoute) { }

  planDetails:any=[
    {name:'SOLO',price:'599',stdevice:'1',ctdevice:'5'},
    {name:'FAMILY',price:'799',stdevice:'2',ctdevice:'8'}
  ]

  ngOnInit(): void {
    this.price = this.route.snapshot?.params['price'];
    this.planType = this.route.snapshot?.params['plan'];
    this.stream_device= this.route.snapshot?.params['stream_device'];
    this.connect_device= this.route.snapshot?.params['connect_device']
  }
  getPlan(e:any)
  {
    console.log(e);
    this.planType = e.plantype;
    this.price = e.price;
    this.stream_device = e.stream_device;
    this.connect_device = e.connect_device;
  }
  getPlanDetails(e:any){
    this.planType = this.planDetails[e.target.value].name;
    this.price = this.planDetails[e.target.value].price;
  }

  dates:any=[
    {month:'Jan',year:'2011'},
    {month:'Feb',year:'2012'},
    {month:'Mar',year:'2013'},
    {month:'Apr',year:'2014'},
    {month:'May',year:'2015'},
    {month:'jun',year:'2016'},
    {month:'Jul',year:'2017'},
    {month:'Aug',year:'2018'},
    {month:'Sep',year:'2019'},
    {month:'Oct',year:'2020'},
    {month:'Nov',year:'2021'},
    {month:'Dec',year:'2022'},
  ]

}
