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
    { 
      provide: RestBaseService, 
      useFactory: (http:Http) => new RestBaseService<Address>(http, 'http://127.0.0.1:4201/api/search?text=pa'),
      deps: [Http]
    }
  ]
})

export class FeatureTwoModule {
  constructor(private restBaseService:RestBaseService<Address>) { 
    this.restBaseService.getItems().subscribe(items => console.log('FeatureTwoModule here: ', items)  );
} }
