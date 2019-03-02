import { ICity } from '../interface/iCity';
import { Forecast } from './forecast';

export class City implements ICity {
    id: string; name: string;
    code: string;
    clouds: string;
    dct: Date;
    countryCode: string;
    sunrise: Date;
    sunset: Date;
    snow: import("../interface/iVolume").IVolume;
    rain: import("../interface/iVolume").IVolume;
    wind: import("../interface/iWind").IWind;
    mainFeature: import("../interface/iMain").IMain;
    weather: import("../interface/iWeather").IWeather[];
    coord: import("../interface/ICoord").ICoord;
    forecasts?: Forecast[];
    population?: number;
}
