import { HttpUtils } from "../httpUtils";
import { ServiceResponse } from "./ServiceResponse";

export class WeatherService {
    API_KEY;
    options;

    constructor(API_KEY, userOptions = {}) {
        // Piste d'optimisation : Vérifier que les userOptions est valide (pas de clés farfelues)
        // et jeter une execption si non valie 
        this.API_KEY = API_KEY;

        this.options = {
            units: 'metric',
            lang: 'fr',
        };

        Object.assign(this.options, { appid: API_KEY }, userOptions);
    };

    getCurrent(coords) {
        const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';

        // On mélange coords et this.options (coords qui sera modifié)
        Object.assign(coords, this.options);

        let url = HttpUtils.buildUrl(baseUrl, coords);

        // Lancement de la requete
        return new Promise(resolve => {
            fetch(url) // Promise emise par fetch()
                .then(response => response.json()) // Promise emise par json()
                .then(dataJSON => resolve(new ServiceResponse(true, null, dataJSON)))
                .catch(error => { resolve(new ServiceResponse(false, error, null)) })
        });
    }
}