import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';

import { Address } from '../models/address';
import { RestBaseService } from '../services/rest-base.service';
import { DummyTwoComponent } from './dummy-two/dummy-two.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [DummyTwoComponent],
  exports: [DummyTwoComponent],
  providers: [
    { 
      provide: RestBaseService, 
      useFactory: (http:Http) => new RestBaseService<Address>(http, 'http://127.0.0.1:4201/api/search?text=pa'),
      deps: [Http]
    }
  ]
})

export class FeatureTwoModule {
  constructor(private restBaseService:RestBaseService<Address>) {}
}
