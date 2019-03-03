import { IForecast } from '../interface/iForecast';

export class Forecast implements IForecast {
    clouds: string; dct: string;
    snow: import("../interface/iVolume").IVolume;
    rain: import("../interface/iVolume").IVolume;
    wind: import("../interface/iWind").IWind;
    mainFeature: import("../interface/iMain").IMain;
    weather?: import("../interface/iWeather").IWeather[];


}