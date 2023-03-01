import { Sun } from "./Sun";
import { Wind } from "./WInd";
import { Weather } from "./Weather";
import { Main } from "./main";

const iconCDN = "http://openweathermap.org/img/w/";

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

        let html = `<h2>${this.locationName}</h2>`;
        html += `<div><img src="${iconCDN + this.weather.icon}.png" alt="${this.weather.description}" title="${this.weather.description}"></img></div>`
        html += '<ul>';
        html += `<li><strong>Température :</strong> ${this.main.temp} °C - ( ${this.main.feels_like} °C ressenti )</li>`;
        html += `<li><strong>Température min :</strong>${this.main.temp_min}</li>`;
        html += `<li><strong>Température max :</strong>${this.main.temp_max}</li>`;
        html += '</ul>';

        elDiv.innerHTML = html;

        return elDiv;
    }
}