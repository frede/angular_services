import { Component } from '@angular/core';

import { Contact } from '../../models/contact';
import { RestBaseService } from '../../services/rest-base.service';

@Component({
  selector: 'app-one-child',
  template: 'oneChild',
})
export class OneChildComponent {
  constructor(private restBaseService:RestBaseService<Contact>) { 
    this.restBaseService.getItems().subscribe(items => console.log('OneChildComponent here: ', items)  );
  }
}
