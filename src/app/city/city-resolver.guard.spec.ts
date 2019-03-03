import { TestBed, async, inject } from '@angular/core/testing';

import { CityResolverGuard } from './city-resolver.guard';

describe('CityResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityResolverGuard]
    });
  });

  it('should ...', inject([CityResolverGuard], (guard: CityResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
