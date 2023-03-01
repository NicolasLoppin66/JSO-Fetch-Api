export class Wind {

    speed;
    deg;
    gust;

    constructor(windLiteral) {
        this.speed = windLiteral.speed;
        this.deg = windLiteral.deg;
        this.gust = windLiteral.gust;
    }
}