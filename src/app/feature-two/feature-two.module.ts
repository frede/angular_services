import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';

import { Address } from '../models/address';
import { RestBaseService } from '../services/rest-base.service';
import { DummyTwoComponent } from './dummy-two/dummy-two.component';
import { TwoChildComponent } from './two-child/two-child.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [DummyTwoComponent, TwoChildComponent],
  exports: [DummyTwoComponent]
})

export class FeatureTwoModule { }
