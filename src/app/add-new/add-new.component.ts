import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
  private fb: FormBuilder) { }

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

  }
}
