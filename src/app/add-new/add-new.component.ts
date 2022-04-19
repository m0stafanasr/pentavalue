import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataServiceService } from '../service/data-service.service';
import { Add_Data } from '../store/actions/actions';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
itemForm:FormGroup
ad  
newAd
constructor( public activeModal:NgbActiveModal,
  private fb: FormBuilder, private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.createForm();
    console.log(this.ad)
    console.log(this.newAd)
  }
  createForm(){
    if(!this.ad?.from_time){
      document.getElementById('mediaAd').style.display="block"
      this.itemForm = this.fb.group({
        from_time:[],
        to_time:[],
        media:[]
      })
    } else{
      this.itemForm = this.fb.group({
        from_time:[this.ad.from_time],
        to_time:[this.ad.to_time],
        image:[this.ad.image],
        video:[this.ad.video]
      })
    }
  }

  saveAd(){
    this.dataService.addAd({action: this.itemForm.value});
      
  }
}
function payload(type: any, arg1: string, payload: any, itemForm: FormGroup): { action: any; } {
  throw new Error('Function not implemented.');
}

