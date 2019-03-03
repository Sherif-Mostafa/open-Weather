import { environment } from 'src/environments/environment';

export const API = {
    'OpenWeather': {
        'CityWeather': environment.APIBaseUrl + 'data/2.5/weather?id={city}&units=metric&appid=' + environment.AppId,
        'CityForecast': environment.APIBaseUrl + 'data/2.5/forecast?id={city}&units=metric&appid=' + environment.AppId,
        'CitiesWeather': environment.APIBaseUrl + 'data/2.5/group?id={ids}&units=metric&appid=' + environment.AppId,
        'Icons': 'http://openweathermap.org/img/w/{icon}.png',
        'Flags': 'https://www.countryflags.io/{country}/flat/64.png'
    },
    "Cities": {
        'Data': './assets/data/cities.json'
    }
}
