import { Subject } from "rxjs/internal/Subject";
import { City } from 'src/app/shared/models/city';
import { of } from 'rxjs/internal/observable/of';

export class CityServiceMock {
    selectedCity: City = new City();
    allCities: City[] = new Array<City>();
    cities: City[] = new Array<City>();
    defaultCities: City[] = [{
        clouds: '',
        code: '',
        coord: { lat: '', long: '' },
        countryCode: '',
        dct: new Date(),
        id: '1',
        mainFeature: { temp_kf: '', tempMin: '', tempMax: '', temp: '', sea_level: '', pressure: '', humidity: '', grnd_level: '', },
        name: '',
        rain: { three_hours: '', one_hour: '' },
        snow: { one_hour: '', three_hours: '', },
        sunrise: new Date(),
        sunset: new Date(),
        weather: [{
            description: '',
            icon: '',
            id: '',
            main: ''
        }],
        wind: { speed: '', deg: '' },
        forecasts: [
            {
                clouds: '',
                dct: '',
                mainFeature: {
                    grnd_level: '',
                    humidity: '',
                    pressure: '',
                    sea_level: '',
                    temp: '',
                    tempMax: '',
                    tempMin: '',
                    temp_kf: ''
                },
                rain: { one_hour: '', three_hours: '' },
                snow: { one_hour: '', three_hours: '' },
                weather: [{
                    description: '',
                    icon: '',
                    id: '',
                    main: ''
                }],
                wind: { deg: '', speed: '' }

            }]
    }];
    getCityWeather(cityId: string) {
        return of({});
    }
    mapCityWeather() {
        return new City();
    }

    getCitiesWeather() {
        return of({});
    }
    getCityForecast() {
        return of(this.defaultCities[0]);
    }
    mapCityForecast() {
        return new City();
    }
    getCities() {
        return of({});
    }
    getSelectedCities(ids) {
        return of({});

    }
    addNewCity(id: string) { }
    removeCity(id: string) { }
}