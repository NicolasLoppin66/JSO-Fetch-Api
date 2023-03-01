export class Weather {

    id;
    main;
    description;
    icon;

    constructor(weatherLiteral) {
        this.id = weatherLiteral.id
        this.main = weatherLiteral.main
        this.description = weatherLiteral.description
        this.icon = weatherLiteral.icon
    }
}