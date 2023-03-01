import { CurrentWeather } from "./Entities/CurrentWeather";
import { WeatherService } from "./Services/WeatherService";

const API_KEY = "f318c51b5abe55527e312acb7d3d25e4";

class App {

    elMain;

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

        this.elMain = document.createElement('main');
        document.body.append(this.elMain);

        // La méteo en français
        this.WeatherServiceFr
            .getCurrent({ lat: 42.5, lon: 2.7 }) // Promise emise par JSON()
            .then(this.handlerServiceResponse.bind(this));

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

    /**
     * Gere la réponse du service 
     */
    handlerServiceResponse(serviceResponse) {
        if (!serviceResponse.ok) {
            this.elMain.append(this.getErrorDOM(serviceResponse.error));
            return;
        }

        const currentWeather = new CurrentWeather(serviceResponse.data);

        this.elMain.append(currentWeather.getDOM());
    }

    /**
     * Crée le DOM pour afficher une erreur
     */
    getErrorDOM(error) {
        const elDiv = document.createElement('div');
        elDiv.classList.add('weather-item', 'error');
        elDiv.innerText = error.message;

        return elDiv;
    }
}

const app = new App();

export default app;