import { TestBed } from '@angular/core/testing';

import { HttpcallsService } from './httpcalls.service';

describe('HttpcallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpcallsService = TestBed.get(HttpcallsService);
    expect(service).toBeTruthy();
  });
});
