class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
        if (typeof brand == 'string' && brand.length >= 1 && brand.length <= 50) {
            this.#brand = brand;
        } 
        else throw 'Некорректные значения';

        if (typeof model == 'string' && model.length >= 1 && model.length <= 50) {
            this.#model = model;
        } 
        else throw 'Некорректные значения';

        if (typeof yearOfManufacturing == 'number' && yearOfManufacturing >= 1900 && yearOfManufacturing <= new Date().getFullYear()) {
            this.#yearOfManufacturing = yearOfManufacturing;
        } 
        else throw 'Некорректные значения';

        if (typeof maxSpeed == 'number' && maxSpeed >= 100 && maxSpeed <= 300) {
            this.#maxSpeed = maxSpeed;
        } 
        else throw 'Некорректные значения';

        if (typeof maxFuelVolume == 'number' && maxFuelVolume >= 10 && maxFuelVolume <= 50) {
            this.#maxFuelVolume = maxFuelVolume;
        } 
        else throw 'Некорректные значения';

        if (typeof fuelConsumption == 'number' && fuelConsumption > 0) {
            this.#fuelConsumption = fuelConsumption;
        } 
        else throw 'Некорректные значения';
    }

    get brand() {
        return this.#brand;
    }

    set brand(value) {
        if (typeof value != 'string' || value.length < 1 || value.length > 50) {
            throw 'Некорректное значение';
        }
        else this.#brand = value;
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        if (typeof value != 'string' || value.length < 1 || value.length > 50) {
            throw 'Некорректное значение';
        }
        else this.#model = value;
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(value) {
        if (typeof value != 'number' || value < 1900 || value > new Date().getFullYear()) {
            throw 'Некорректное значение';
        }
        else this.#yearOfManufacturing = value;
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxSpeed(value) {
        if (typeof value != 'number' || value < 100 || value > 300) {
            throw 'Некорректное значение';
        }
        else this.#maxSpeed = value;
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set maxFuelVolume(value) {
        if (typeof value != 'number' || value < 10 || value > 50) {
            throw 'Некорректное значение';
        }
        else this.#maxFuelVolume = value;
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    set fuelConsumption(value) {
        if (typeof value != 'number' || value <= 0) {
            throw 'Некорректное значение';
        }
        else this.#fuelConsumption = value;
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    start() {
        if (this.#isStarted) {
            throw 'Машина уже заведена';
        }
        else this.#isStarted = true;
    }

    shutDownEngine() {
        if (!this.#isStarted) {
            throw 'Машина ещё не заведена';
        }
        else this.#isStarted = false;
    }

    fillUpGasTank(fuel) {
        if (typeof fuel != 'number' || fuel <= 0) {
            throw 'Неверное количество топлива для заправки';
        }
        else if (fuel + this.#currentFuelVolume > this.#maxFuelVolume) {
            throw 'Топливный бак переполнен';
        }
        else this.#currentFuelVolume += fuel;
    }

    drive(speed, numOfHours) {
        if (typeof speed != 'number' || speed <= 0) {
            throw 'Неверная скорость';
        }
        else if (typeof numOfHours != 'number' || numOfHours <= 0) {
            throw 'Неверное количество часов';
        }
        else if (speed > this.#maxSpeed) {
            throw 'Машина не может ехать так быстро';
        }
        else if (!this.#isStarted) {
            throw 'Машина должна быть заведена, чтобы ехать';
        }
        else if (this.#currentFuelVolume < this.#fuelConsumption * speed * numOfHours / 100) {
            throw 'Недостаточно топлива';
        }
        else {
            this.#currentFuelVolume -= this.#fuelConsumption * speed * numOfHours / 100;
            this.#mileage += speed * numOfHours;
        }
    }
}