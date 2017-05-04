import { TestBed, inject } from '@angular/core/testing';

import { RestBaseService } from './rest-base.service';

describe('RestBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestBaseService]
    });
  });

  it('should ...', inject([RestBaseService], (service: RestBaseService) => {
    expect(service).toBeTruthy();
  }));
});
