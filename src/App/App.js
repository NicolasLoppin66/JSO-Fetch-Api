const API_KEY = "{CLE API}";

class App {

    start() {
        console.log('App démarrer ...');

        // http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=

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

    }
}

const app = new App();

export default app;