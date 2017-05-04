import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { Address } from '../../models/address';
import { RestBaseService } from '../../services/rest-base.service';

@Component({
  selector: 'app-dummy-two',
  template: 'two'
})

export class DummyTwoComponent {

  constructor(private restBaseService:RestBaseService<Address>) { 
    this.restBaseService.getItems().subscribe(items => console.log('DummyTwoComponent here: ', items)  );
  }
}
