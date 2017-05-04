import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';

import { Contact } from '../models/contact';
import { RestBaseService } from '../services/rest-base.service';
import { DummyOneComponent } from './dummy-one/dummy-one.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [DummyOneComponent],
  exports: [DummyOneComponent],
  providers: [
    { 
      provide: RestBaseService, 
      useFactory: (http:Http) => new RestBaseService<Contact>(http, 'http://127.0.0.1:4201/api/contacts'),
      deps: [Http]
    }
  ]
})

export class FeatureOneModule {
  constructor(private restBaseService:RestBaseService<Contact>) {}
}
