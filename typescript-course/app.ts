// TYPESCRIPT TYPES MODULE

class Computer {
    lastResult: number | null = null;

    updateLastResult = (result: number): void => {
        this.lastResult = result;
    };

    multiply = (x: number, y: number): number => {
        const result: number = x * y;
        this.updateLastResult(result);
        return result;
    };

    add = (x: number, y: number): number => {
        const result: number = x + y;
        this.updateLastResult(result);
        return result;
    };
}

const calculator: Computer = new Computer();

let userData: { name: string; age: number } = {
    name: "Niv",
    age: 25
};

let multiplier: {
    values: number[];
    sumValues: () => number;
} = {
    values: [1, 2, 3, 4, 5, 6],
    sumValues: function() {
        return this.values.reduce((total, num) => total + num, 0);
    }
};


// ES6 CLASSES MODULE

enum VehicleType { Sedan, Hatchback, Van, Minivan, Truck, Bike }; 
enum Color { Green, Blue, Red, Gray, Black, White, Silver, Yellow };

class MyCar {
    brand: string;
    type: VehicleType;
    color: Color;

    constructor(brand: string, type: VehicleType, color: Color) {
        this.brand = brand;
        this.type = type;
        this.color = color;
    }
}

enum MazdaModels { Three, Six, Two, Lantis, SX5, MX5 }

class Mazda extends MyCar {
    model: MazdaModels;
    productionYear: number;

    constructor(model: MazdaModels, productionYear: number) {
        super("Mazda", VehicleType.Sedan, Color.Gray);
        this.model = model;
        this.productionYear = productionYear;
    }
}

const myMyCar = new MyCar("Mazda", VehicleType.Sedan, Color.Gray);
console.log(myMyCar);

const myMazda = new Mazda(MazdaModels.Three, 2013);
console.log(myMazda);