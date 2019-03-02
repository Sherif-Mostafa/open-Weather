export interface IMain {
    // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
    temp: string;
    // Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
    pressure: string;
    // Humidity, %
    humidity: string;
    // Minimum temperature at the moment. This is deviation from current temp that is possible for large cities
    // and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    temp_min: string;
    // Maximum temperature at the moment. This is deviation from current temp that is possible for large cities 
    // and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    temp_max: string;
    // Atmospheric pressure on the sea level, hPa
    sea_level: string;
    // Atmospheric pressure on the ground level, hPa
    grnd_level: string;
}
