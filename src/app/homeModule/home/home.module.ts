import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const homeRoute:Routes=[
  {path:'', component:HomeComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),

    
  ]
})


export class HomeModule { 


}
