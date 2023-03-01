import { WeatherService } from "./Services/WeatherService";

const API_KEY = "f318c51b5abe55527e312acb7d3d25e4";

class App {

    WeatherServiceFr;
    WeatherServiceGb;
    WeatherServiceUs;

    constructor() {
        this.WeatherServiceFr = new WeatherService(API_KEY);
        this.WeatherServiceGb = new WeatherService(API_KEY, {
            lang: 'en'
        });
        this.WeatherServiceUs = new WeatherService(API_KEY, {
            lang: 'en',
            units: 'imperial'
        });
    }

    start() {
        console.log('App démarrer ...');

        // La méteo en français
        this.WeatherServiceFr
            .getCurrent({ lat: 42.5, lon: 2.7 }) // Promise emise par JSON()
            .then(serviceResponse => {
                console.log(serviceResponse);
            });

        // http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=
        /*
        // Démo découpée du fonctionnement du fetch
        let lat = 42.67945204720265;
        let lon = 2.79457409810873;

        const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
        let arrQueryString = [];
        arrQueryString.push(
            'appid=' + API_KEY,
            'lat=' + lat,
            'lon=' + lon
        );

        console.log(arrQueryString);

        let queryString = arrQueryString.join('&');

        let url = baseUrl + '?' + queryString;

        // Lance de la requete asynchrone : on attend la réponse du service (la promise gere l'attente).
        let fetchPromise = fetch(url);

        // Traitement (conversion en JSON) du flux contenu dans la réponse.
        let jsonPromise = fetchPromise.then(response => {
            return response.json();
        });

        // Traitement des données issues de la conversion.
        jsonPromise.then(data => {
            console.log(data);
        });
        */
    }
}

const app = new App();

export default app;