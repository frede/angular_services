import { Component } from '@angular/core';

import { Address } from '../../models/address';
import { RestBaseService } from '../../services/rest-base.service';

@Component({
  selector: 'app-two-child',
  template: 'TWOchild',
})
export class TwoChildComponent {

  constructor(private restBaseService:RestBaseService<Address>) { 
    this.restBaseService.getItems().subscribe(items => console.log('TwoChildComponent here: ', items)  );
  }

}
