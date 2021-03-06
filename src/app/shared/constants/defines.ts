export const JSON_PATHS = {
    City: {
        id: '$.id',
        name: '$.name',
        code: '$.cod',
        lat: '$.coord.lat',
        lon: '$.coord.lon',
        dt: '$.dt',
        dtText: '$.dt_txt',
        clouds: '$.clouds.all',
        humidity: '$.main.humidity',
        sea_level: '$.main.sea_level',
        grnd_level: '$.main.grnd_level',
        pressure: '$.main.pressure',
        temp: '$.main.temp',
        tempMax: '$.main.temp_max',
        tempMin: '$.main.temp_min',
        temp_kf: '$.main.temp_kf',
        windSpeed: '$.wind.speed',
        windDegree: '$.wind.deg',
        rain: 'rain',
        snow: 'snow',
        _1h: '1h',
        _3h: '3h',
        snow1h: '$.snow.1h',
        sunrise: '$.sys.sunrise',
        sunset: '$.sys.sunset',
        countryCode: '$.sys.country',
        forecastCountryCode: '$.country',
        type: '$.sys.type',
        weather: '$.weather',
        weatherId: '$.id',
        weatherMain: '$.main',
        weatherDescription: '$.description',
        weatherIcon: '$.icon',
        city: "$.city",
        population: "$.population",
        forecasts: "$.list"
    }
}

export const routes = {
    'city': '/city',
    'home': '/home'
}