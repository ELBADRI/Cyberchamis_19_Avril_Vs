import { TestBed } from '@angular/core/testing';

import { TestServerService } from './test-server.service';

describe('TestServerService', () => {
  let service: TestServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
