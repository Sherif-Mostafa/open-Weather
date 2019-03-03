import { IVolume } from './iVolume';
import { IWind } from './iWind';
import { IMain } from './iMain';
import { IWeather } from './iWeather';

// Forecast Interface
export interface IForecast {
    // Cloudiness, %
    clouds: string;
    // Time of data calculation, unix, UTC
    dct: string;
    // snow rate
    snow: IVolume;
    // rain rate
    rain: IVolume;
    // wind speed & directions
    wind: IWind;
    // represents the temp , pressure, humidity , temp_min, temp_max, sea_level, grnd_level
    mainFeature: IMain;
    // Weather condition
    weather?: IWeather[];
}

