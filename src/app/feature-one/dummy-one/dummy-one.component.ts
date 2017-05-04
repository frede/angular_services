import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Contact } from '../../models/contact';
import { RestBaseService } from '../../services/rest-base.service';

@Component({
  selector: 'app-dummy-one',
  template: 'ONE',
  providers: [
    { 
      provide: RestBaseService, 
      useFactory: (http:Http) => new RestBaseService<Contact>(http, 'http://127.0.0.1:4201/api/contacts'),
      deps: [Http]
    }
  ]
})
export class DummyOneComponent implements OnInit {

  constructor(private restBaseService:RestBaseService<Contact>) { 
    this.restBaseService.getItems().subscribe(items => console.log('DummyOneComponent here: ', items)  );
  }

  ngOnInit() {
  }

}
