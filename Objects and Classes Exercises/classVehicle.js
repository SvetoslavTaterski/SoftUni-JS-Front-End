class Vehicle{
    constructor(type, model, {engine ,power ,quality}, fuel){
        this.type = type;
        this.model = model;
        this.parts = {
            engine,
            power,
            quality : power * engine
        };
        this.fuel = fuel;
    }

    drive(fuelLoss){
        this.fuel -= fuelLoss;
    }
}