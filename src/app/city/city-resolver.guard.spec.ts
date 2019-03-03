import { TestBed, async, inject } from '@angular/core/testing';

import { CityResolverGuard } from './city-resolver.guard';
import { CityService } from '../shared/services/city.service';
import { CityServiceMock } from '../mock/service/city-service.mock';

describe('CityResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityResolverGuard, { provide: CityService, useClass: CityServiceMock }]
    });
  });

  it('should ...', inject([CityResolverGuard], (guard: CityResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
