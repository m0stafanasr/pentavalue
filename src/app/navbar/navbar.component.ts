import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AddNewComponent } from '../add-new/add-new.component';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private dataService:DataServiceService) { }

  ngOnInit(): void {
  }
  addAd(){
    const popUp = this.modalService.open(AddNewComponent, {centered:true,size: 'lg',
    backdrop: 'static'})

    popUp.result.then(res=>{
      this.getAds()
      res.dismiss('Cross click')
    })
    popUp.componentInstance.newAd = "new"
  }

  getAds(){
    this.dataService.getAllAds().subscribe(e=>console.log(e))
  }
}
