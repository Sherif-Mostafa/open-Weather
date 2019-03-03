import { IVolume } from './iVolume';
import { IWind } from './iWind';
import { IMain } from './iMain';
import { IWeather } from './iWeather';
import { ICoord } from './ICoord';

// City Interface
export interface ICity {
    // city ID
    id: string;
    // name of the city
    name: string;
    // code of the city
    code: string;
    // Cloudiness, %
    clouds: string;
    // Time of data calculation, unix, UTC
    dct: Date;
    // Country code (GB, JP etc.)
    countryCode: string;
    // sunrise
    sunrise: Date;
    // sunset    
    sunset: Date;
    // snow rate
    snow: IVolume;
    // rain rate
    rain: IVolume;
    // wind speed & directions
    wind: IWind;
    // represents the temp , pressure, humidity , temp_min, temp_max, sea_level, grnd_level
    mainFeature: IMain;
    // Weather condition
    weather: IWeather[];
    // represet City geo location longitude,latitude
    coord: ICoord;
}

