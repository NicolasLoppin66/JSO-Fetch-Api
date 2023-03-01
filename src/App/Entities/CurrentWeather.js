import { Sun } from "./Sun";
import { Wind } from "./WInd";
import { Weather } from "./Weather";
import { Main } from "./main";

export class CurrentWeather {

    weather;
    main;
    visibility;
    wind;
    locationName;
    rain;
    snow;
    clouds;
    dt;
    sun;

    constructor(currentWeatherLiteral = new Object()) {

        this.clouds = currentWeatherLiteral.clouds.all;
        this.dt = currentWeatherLiteral.dt;
        this.locationName = currentWeatherLiteral.name;

        this.main = new Main(currentWeatherLiteral.main)

        if (currentWeatherLiteral.hasOwnProperty('rain'))
            this.rain = currentWeatherLiteral.rain['1h'];

        if (currentWeatherLiteral.hasOwnProperty('snow'))
            this.snow = currentWeatherLiteral.snow['1h'];

        this.sun = new Sun({
            sunset: currentWeatherLiteral.sys.sunset,
            sunrise: currentWeatherLiteral.sys.sunrise
        })

        this.visibility = currentWeatherLiteral.visibility;

        this.weather = new Weather(currentWeatherLiteral.weather[0]);

        this.wind = new Wind(currentWeatherLiteral.wind)
    }

    getDOM() {
        const elDiv = document.createElement('div');
        elDiv.classList.add('weather-item');

        // TODO 

        return elDiv;
    }
}