import { Injectable } from '@angular/core';
import { API } from '../constants/routes-config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CityService {

  constructor(private http: HttpClient) { }
  /**
  * To get city data 
   * @param  {string} cityId represent the id of the city
   */
  getCityData(cityId: string): Observable<object> {
    const url = API.OpenWeather.CityData.replace('{city}', cityId);
    return this.http.get(url).pipe(map(res => {
      return res;
    }));
  }

}
