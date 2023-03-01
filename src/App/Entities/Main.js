export class Main {

    temp;
    feels_like;
    pressure;
    humidity;
    temp_min;
    temp_max;

    constructor(mainLiteral) {
        this.temp = mainLiteral.temp;
        this.feels_like = mainLiteral.feels_like;
        this.pressure = mainLiteral.pressure;
        this.humidity = mainLiteral.humidity;
        this.temp_min = mainLiteral.temp_min;
        this.temp_max = mainLiteral.temp_max
    }
}