import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddNewComponent } from 'src/app/add-new/add-new.component';
import { Ads } from 'src/app/view-models/ads';
import Swal from 'sweetalert2';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
adss:Ads[]=[]
image:boolean=false;
video:boolean=false;
  constructor(private dataService:DataServiceService,
              private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getData()
  }
getData(){
  this.dataService.getAllAds().subscribe(e=>{
  console.log(typeof(e))

  console.log(e)
  this.adss=e;

})
}
editAd(ad){
    const adPopUp = this.modalService.open(AddNewComponent, {centered:true,size: 'lg',
    backdrop: 'static'});
    adPopUp.result.then(res=>{
        this.getData()      
    }).catch(dismissReason => {
    });
    adPopUp.componentInstance.ad=ad
  }
  deleteAd(ad){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#34c38f',
      confirmButtonColor: '#ff3d60',
      confirmButtonText: 'Yes, delete it!'
  }).then()
  }
}
