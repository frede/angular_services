import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { FeatureOneModule } from "./feature-one/feature-one.module";
import { FeatureTwoModule } from "./feature-two/feature-two.module";
import { RestBaseService } from "./services/rest-base.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FeatureOneModule,
    FeatureTwoModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
