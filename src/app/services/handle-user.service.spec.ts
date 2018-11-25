import { TestBed } from '@angular/core/testing';

import { HandleUserService } from './handle-user.service';

describe('HandleUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandleUserService = TestBed.get(HandleUserService);
    expect(service).toBeTruthy();
  });
});
