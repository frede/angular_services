import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { Contact } from '../../models/contact';
import { RestBaseService } from '../../services/rest-base.service';

@Component({
  selector: 'app-dummy-one',
  template: 'ONE'
})

export class DummyOneComponent {

  constructor(private restBaseService:RestBaseService<Contact>) { 
    this.restBaseService.getItems().subscribe(items => console.log('DummyOneComponent here: ', items)  );
  }

}
