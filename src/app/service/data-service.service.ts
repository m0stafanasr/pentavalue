import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { Ads } from '../view-models/ads';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient, private store:Store<any>) { }
  
  getAllAds(){
    return this.http.get<Ads[]>(`${environment.ApiURL}`)
  }
}

