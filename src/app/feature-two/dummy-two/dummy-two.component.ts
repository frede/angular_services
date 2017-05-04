import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { Address } from '../../models/address';
import { RestBaseService } from '../../services/rest-base.service';

@Component({
  selector: 'app-dummy-two',
  template: 'two<app-two-child></app-two-child>',
  providers: [
    { 
      provide: RestBaseService, 
      useFactory: (http:Http) => new RestBaseService<Address>(http, 'http://127.0.0.1:4201/api/search?text=pa'),
      deps: [Http]
    }
  ]
})

export class DummyTwoComponent {

  constructor(private restBaseService:RestBaseService<Address>) { 
    this.restBaseService.getItems().subscribe(items => console.log('DummyTwoComponent here: ', items)  );
  }
}
