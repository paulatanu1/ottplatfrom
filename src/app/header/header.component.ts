import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() planChoosen=new EventEmitter();
  closeResult: string = '';
  btn_text1 = 'Proceed to Pay';
  isShown: boolean = false ;
  plantype:any='';

  constructor(private modalService: NgbModal,private router : Router) { }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  

  toggleShow() {

    this.isShown = ! this.isShown;
    
    }    

  ngOnInit(): void {
  }
  planDetailsEmit(){
    let price = 899;
    let stream_device=2;
    let connect_device=8;
    if(this.plantype=='plan-a'){
      price = 599;
      stream_device=1;
      connect_device=5;
    }

    console.log(this.plantype);
    this.planChoosen.emit({'plantype':this.plantype,'price':price});
    this.router.navigate(['/Payment'+'/'+this.plantype+'/'+price+'/'+stream_device+'/'+connect_device]);
  }
}
