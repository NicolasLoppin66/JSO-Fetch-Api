export class HttpUtils {
    static buildUrl(base, queryStringParams = {}) {
        /*
        exemple :
        queryStringParams:
        [
             nom: 'toto',
             age: 22,
             cp: 66270
        ]
        */
        // Object.keys(obj) retourne un tableau contenant le nom des propriétés de obj
        let paramsKeys = Object.keys(queryStringParams);
        /*
        paramsKeys: ['nom', 'age', 'cp']
        */

        // Pas de paramètre ? => retour de l'url de base
        if (paramsKeys.length <= 0) return base;

        // Sinon construction de la queryString
        let pairedParams = [];

        // for ... in parcours un objet et obtient seulement le nom des propriétés.
        for (let key in queryStringParams) {
            // Pour trouver la valeur d'un propriété dans un objet, on a 2 solutions :
            // 1er : Si on connait le nom de la clé : obj.maClé
            // 2eme : Si le nom de la clé est une chaine : obj['maClé']
            let paired = `${key}=${queryStringParams[key]}`;

            pairedParams.push(paired);
        }
        /*
        pairedParams: 
        ['nom=toto', 'age=22', 'cp=66270']
        */

        // Return http://toto.com/babiole?nom=toto&age=22&cp=66270
        return `${base}?${pairedParams.join('&')}`;
    }
}