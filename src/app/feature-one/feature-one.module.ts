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
    { 
      provide: RestBaseService, 
      useFactory: (http:Http) => new RestBaseService<Contact>(http, 'http://127.0.0.1:4201/api/contacts'),
      deps: [Http]
    }
  ]
})

export class FeatureOneModule { 
  constructor(private restBaseService:RestBaseService<Contact>) { 
    this.restBaseService.getItems().subscribe(items => console.log('FeatureOneModule here: ', items)  );
    
  }
}
