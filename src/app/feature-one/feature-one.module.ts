import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';

import { Contact } from '../models/contact';
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

export class FeatureOneModule { 

  constructor(private restBaseService:RestBaseService<Contact>, private http:Http) { 
    this.restBaseService.apiEndpoint= 'http://127.0.0.1:4201/api/contacts';
    this.restBaseService.getItems().subscribe(items => console.log('FeatureOneModule here: ', items)  );
    
  }
}
