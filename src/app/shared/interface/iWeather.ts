export interface IWeather {
    // Weather condition id
    id: string;
    // Group of weather parameters (Rain, Snow, Extreme etc.)
    main: string;
    // Weather condition within the group
    description: string;
    // Weather icon id
    icon: string;
}
