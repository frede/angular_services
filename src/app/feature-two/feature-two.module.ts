import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';


import { Address } from '../models/address';
import { RestBaseService } from '../services/rest-base.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    RestBaseService
  ]
})

export class FeatureTwoModule {
  constructor(private restBaseService:RestBaseService<Address>,
              private http:Http) { 
    this.restBaseService.apiEndpoint = 'http://127.0.0.1:4201/api/search?text=pa';
    this.restBaseService.getItems().subscribe(items => console.log('FeatureTwoModule here: ', items));
} }
