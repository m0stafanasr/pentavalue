import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AddNewComponent } from '../add-new/add-new.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: NgbModal,
    ) { }

  ngOnInit(): void {
  }
  addAd(){
    const popUp = this.modalService.open(AddNewComponent, {centered:true,size: 'lg',
    backdrop: 'static'})
    popUp.componentInstance.newAd = "new"
  }
}
