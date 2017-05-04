import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';

import { Contact } from '../models/contact';
import { RestBaseService } from '../services/rest-base.service';
import { DummyOneComponent } from './dummy-one/dummy-one.component';
import { OneChildComponent } from './one-child/one-child.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [DummyOneComponent, OneChildComponent],
  exports: [DummyOneComponent]
})

export class FeatureOneModule { }
