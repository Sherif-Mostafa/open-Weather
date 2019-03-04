import { Injectable } from '@angular/core';
import { API } from '../constants/routes-config';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { City } from '../models/city';
import * as JsonQuery from 'jsonpath/jsonpath';
import { JSON_PATHS } from '../constants/defines';
import { IWeather } from '../interface/iWeather';
import { Forecast } from '../models/forecast';
import { StorageService } from './storage.service';
import { empty } from 'rxjs/internal/observable/empty';

@Injectable()
export class CityService {

  selectedCity: City;
  allCities: City[];
  cities: City[];
  defaultCities: City[];
  constructor(private http: HttpClient, private storageService: StorageService) {
    this.cities = new Array<City>();
  }

  /**
  * To get city data using Http request
   * @param  {string} cityId represent the id of the city
   */
  getCityWeather(cityId: string): Observable<object> {
    const url = API.OpenWeather.CityWeather.replace('{city}', cityId);
    return this.http.get(url).pipe(map(res => {
      return this.mapCityWeather(res);
    }));
  }

  /**
    * To get mapped city data model from any item
     * @param  {any} item represent the id of the city
     * @returns Object of type City
     */
  mapCityWeather(item: any): City {
    let city = new City();

    city.id = JsonQuery.value(item, JSON_PATHS.City.id) || null;
    city.name = JsonQuery.value(item, JSON_PATHS.City.name) || null;
    city.code = JsonQuery.value(item, JSON_PATHS.City.code) || null;
    city.countryCode = JsonQuery.value(item, JSON_PATHS.City.countryCode) || null;
    city.dct = JsonQuery.value(item, JSON_PATHS.City.dt) || null;
    city.clouds = JsonQuery.value(item, JSON_PATHS.City.clouds) || null;
    city.coord = {
      long: JsonQuery.value(item, JSON_PATHS.City.lon) || null,
      lat: JsonQuery.value(item, JSON_PATHS.City.lat) || null
    };

    city.mainFeature = {
      humidity: JsonQuery.value(item, JSON_PATHS.City.humidity) || null,
      grnd_level: JsonQuery.value(item, JSON_PATHS.City.grnd_level) || null,
      sea_level: JsonQuery.value(item, JSON_PATHS.City.sea_level) || null,
      pressure: JsonQuery.value(item, JSON_PATHS.City.pressure) || null,
      temp: JsonQuery.value(item, JSON_PATHS.City.temp) || null,
      tempMax: JsonQuery.value(item, JSON_PATHS.City.tempMax) || null,
      tempMin: JsonQuery.value(item, JSON_PATHS.City.tempMin) || null
    };
    city.wind = {
      deg: JsonQuery.value(item, JSON_PATHS.City.windSpeed) || null,
      speed: JsonQuery.value(item, JSON_PATHS.City.windDegree) || null
    }

    city.sunrise = JsonQuery.value(item, JSON_PATHS.City.sunrise) ? new Date(JsonQuery.value(item, JSON_PATHS.City.sunrise)) : null;
    city.sunset = JsonQuery.value(item, JSON_PATHS.City.sunset) ? new Date(JsonQuery.value(item, JSON_PATHS.City.sunset)) : null;

    const weatherData = JsonQuery.value(item, JSON_PATHS.City.weather) as Array<object> || null;
    if (weatherData) {
      city.weather = new Array();
      weatherData.map(el => {
        let weather: IWeather =
        {
          id: JsonQuery.value(el, JSON_PATHS.City.weatherId) || null,
          icon: JsonQuery.value(el, JSON_PATHS.City.weatherIcon) || null,
          main: JsonQuery.value(el, JSON_PATHS.City.weatherMain) || null,
          description: JsonQuery.value(el, JSON_PATHS.City.weatherDescription) || null
        }
        city.weather.push(weather);
      })
    }

    return city;
  }

  getCitiesWeather(ids: string): Observable<object> {
    const url = API.OpenWeather.CitiesWeather.replace('{ids}', ids);
    return this.http.get(url).pipe(map((res: any) => {
      return (res.list as Array<any>).map(city => {
        return this.mapCityWeather(city);
      })
    }));
  }

  /**
  * To get mapped city data model from any item
   * @param  {any} response represent the Http response of the city forecast
   * @returns Object of type City with it's forecast
   */
  getCityForecast(cityId: string): Observable<object> {
    const url = API.OpenWeather.CityForecast.replace('{city}', cityId);
    return this.http.get(url).pipe(map(res => {
      return this.mapCityForecast(res);
    }));
  }

  /**
    * To get mapped city data model from any item
     * @param  {any} response represent the Http response of the city forecast
     * @returns Object of type City with it's forecast
     */
  mapCityForecast(response: any): City {
    let city: City = JsonQuery.value(response, JSON_PATHS.City.city);

    if (city) {

      let forecasts = JsonQuery.value(response, JSON_PATHS.City.forecasts);
      if (forecasts) {
        city.forecasts = new Array();
        forecasts.map(el => {
          let forecast: Forecast = {
            wind: {
              deg: JsonQuery.value(el, JSON_PATHS.City.windDegree) || null,
              speed: JsonQuery.value(el, JSON_PATHS.City.windSpeed) || null
            },
            clouds: JsonQuery.value(el, JSON_PATHS.City.clouds) || null,
            dct: JsonQuery.value(el, JSON_PATHS.City.dtText) || null,
            mainFeature: {
              grnd_level: JsonQuery.value(el, JSON_PATHS.City.grnd_level) || null,
              humidity: JsonQuery.value(el, JSON_PATHS.City.humidity) || null,
              pressure: JsonQuery.value(el, JSON_PATHS.City.pressure) || null,
              sea_level: JsonQuery.value(el, JSON_PATHS.City.sea_level) || null,
              temp: JsonQuery.value(el, JSON_PATHS.City.temp) || null,
              tempMax: JsonQuery.value(el, JSON_PATHS.City.tempMax) || null,
              tempMin: JsonQuery.value(el, JSON_PATHS.City.tempMin) || null,
              temp_kf: JsonQuery.value(el, JSON_PATHS.City.temp_kf) || null
            },
            rain: {
              one_hour: el[JSON_PATHS.City.rain] ? el[JSON_PATHS.City.rain][JSON_PATHS.City._1h] : null,
              three_hours: el[JSON_PATHS.City.rain] ? el[JSON_PATHS.City.rain][JSON_PATHS.City._1h] : null
            },
            snow: {
              one_hour: el[JSON_PATHS.City.snow] ? el[JSON_PATHS.City.snow][JSON_PATHS.City._1h] : null,
              three_hours: el[JSON_PATHS.City.snow] ? el[JSON_PATHS.City.snow][JSON_PATHS.City._1h] : null
            }
          }
          const weatherData = JsonQuery.value(el, JSON_PATHS.City.weather) as Array<object> || null;
          if (weatherData) {
            forecast.weather = new Array();
            weatherData.map(item => {
              let weather: IWeather =
              {
                id: JsonQuery.value(item, JSON_PATHS.City.weatherId) || null,
                icon: JsonQuery.value(item, JSON_PATHS.City.weatherIcon) || null,
                main: JsonQuery.value(item, JSON_PATHS.City.weatherMain) || null,
                description: JsonQuery.value(item, JSON_PATHS.City.weatherDescription) || null
              }
              forecast.weather.push(weather);
            })
          }
          city.forecasts.push(forecast);
        })
      }
    }

    return city;
  }

  /**
  * To get mapped cities data model from openWeather
   * @returns List of cities mapped with weather from openWeather
   */
  getCities() {
    const cities = this.storageService.getLocalStorage('cities');
    if (cities && this.allCities) {
      this.cities = cities;
      return empty();
    }
    return this.http.get(API.Cities.Data).pipe(map(res => {
      this.allCities = JSON.parse(JSON.stringify(res)) as Array<any>;
      this.cities = res as Array<any>;
      let ids = this.storageService.getLocalStorage('selectedCitiesIds');
      if (ids) {
        (ids as Array<string>).map(el => {
          let deletedCity = this.cities.find(item => item.id == el);
          if (deletedCity) {
            let index = this.cities.indexOf(deletedCity);
            this.cities.splice(index, 1);
          }
        })
        return ids;
      }
      return this.cities.splice(0, 5).map(el => {
        return el.id;
      });
    }), mergeMap((ids) => {
      return this.getSelectedCities(ids).pipe(map(_ => {
        this.storageService.setLocalStorage('selectedCitiesIds', ids);
        this.storageService.setLocalStorage('cities', this.cities);
      }));
    })
    );
  }

  getSelectedCities(ids) {
    return this.getCitiesWeather(ids.toString()).pipe(map(res => {
      this.defaultCities = res as Array<any>;
    }))
  }

  /** Add new city to the home by getting it's id and add it to the default cities
   * @param id new city id
   */
  addNewCity(id: string) {
    this.getCityWeather(id).subscribe(city => {
      let deletedCity = this.cities.findIndex(item => item.id == id);
      this.cities.splice(deletedCity, 1);
      if (!this.defaultCities) {
        this.defaultCities = new Array<City>();
      }
      this.defaultCities.push(city as City);
      let ids = this.storageService.getLocalStorage('selectedCitiesIds');
      ids.push(+id)
      this.storageService.setLocalStorage('selectedCitiesIds', ids);
      this.storageService.setLocalStorage('cities', this.cities);
    })
  }

  /** Remove specfic city card from the home by selecting it from default services array and remove it 
   * @param id the id of the city will be deleted
   */
  removeCity(id: string) {
    let deletedCity = this.defaultCities.find(item => item.id == id);
    let index = this.defaultCities.indexOf(deletedCity);
    this.defaultCities.splice(index, 1);
    let ids = this.storageService.getLocalStorage('selectedCitiesIds') as Array<any>;
    let cityId = ids.findIndex(item => item == id);
    ids.splice(cityId, 1);
    this.storageService.setLocalStorage('selectedCitiesIds', ids);
    const removedCity = this.allCities.find(city => {
      return city.id == id;
    })
    this.cities.push(removedCity);
    this.storageService.setLocalStorage('cities', this.cities);
  }
}
