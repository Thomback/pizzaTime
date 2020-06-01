import { TestBed } from '@angular/core/testing';

import { PizzaManagerService } from './pizza-manager.service';

describe('PizzaManagerService', () => {
  let service: PizzaManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
