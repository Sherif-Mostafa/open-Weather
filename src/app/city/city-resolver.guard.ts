import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CityService } from '../shared/services/city.service';
import { map } from 'rxjs/operators';
import { AppService } from '../app.service';

@Injectable()
export class CityResolverGuard implements Resolve<any> {
  constructor(private cityService: CityService, private appService: AppService) {
  } 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.appService.showLoader = true;

   return this.cityService.getCities().pipe(map(_ => {

    }));
  }
}
