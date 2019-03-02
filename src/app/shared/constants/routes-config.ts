import { environment } from 'src/environments/environment';

export const API = {
    'OpenWeather': {
        'CityData': environment.APIBaseUrl + 'data/2.5/weather?q={city}&appid=' + environment.AppId,
        'CitiesData': environment.APIBaseUrl + 'data/2.5/group?id={ids}&units=metric&appid=' + environment.AppId,
        'Icons': 'http://openweathermap.org/img/w/{icon}.png',
        'Flags': 'https://www.countryflags.io/{country}/flat/64.png'
    }
}
