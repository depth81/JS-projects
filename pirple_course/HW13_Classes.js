/**Create a class called "Vehicle" and add methods that allow you to set the "Make", "Model", "Year,", and "Weight".

The class should also contain a "NeedsMaintenance" boolean that defaults to False, and and "TripsSinceMaintenance" Integer that defaults to 0.

Next create a subclass that inherits the properties of Vehicle class. Call this new subclass "Cars".

The Cars class should contain a method called "Drive" that sets the state of a boolean isDriving to True.  It should have another method called "Stop" that sets the value of isDriving to false.

Switching isDriving from true to false should increment the "TripsSinceMaintenance" counter. And when TripsSinceMaintenance exceeds 100, then the NeedsMaintenance boolean should be set to true.

Add a "Repair" method to either class that resets the TripsSinceMaintenance to zero, and NeedsMaintenance to false.

Create 3 different cars, using your Cars class, and drive them all a different number of times. Then print out their values for Make, Model, Year, Weight, NeedsMaintenance, and TripsSinceMaintenance */

class Vehicle {

    NeedsMaintenance = false;
    TripsSinceMaintenance = 97;

    constructor(make, model, year, weight) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
    }

    //MAKE
    get Make() {
        return this._make;
    }
    
    set make(value) {
        if (value.length < 3) {
            alert("Make is too short.");
            return;
        }
        this._make = value;
    }

    //MODEL
    get Model() {
        return this._model;
    }
    
    set model(value) {
        if (value.length < 3) {
            alert("Model is too short.");
            return;
        }
        this._model = value;
    }

    //YEAR
    get Year() {
        return this._year;
    }
    
    set year(value) {
        if (value.length < 4) {
            alert("Year is too short.");
            return;
        }
        this._year = value;
    }

    //WEIGHT
    get Weight() {
        return this._weight;
    }
    
    set weight(value) {
        if (value.length < 3) {
            alert("Weight is too short.");
            return;
        }
        this._weight = value;
    }

    //Manage trips
    trips(){
        this.TripsSinceMaintenance += 1;
        if(this.TripsSinceMaintenance > 100){
            this.NeedsMaintenance = true;
        }
    }

    //Manage PLANES trips
    planeTrips(){
        this.TripsSinceMaintenance += 1;
        if(this.TripsSinceMaintenance > 100){
            this.NeedsMaintenance = true;
        }
        return this.NeedsMaintenance;
    }

    //REPAIR
    Repair(){
        this.NeedsMaintenance = false;
        this.TripsSinceMaintenance = 0;
    }


}

class Cars extends Vehicle{
    
    isDriving = false;

    constructor(make, model, year, weight) {
        super(make, model, year, weight); // call the super class constructor and pass in the parameters
    }

    Drive(){
        this.isDriving = !this.isDriving;
        super.trips();
        return `Now I am driving this vehicle! ruuummmmm`;
    }

    Stop(){
        this.isDriving = false;
        return `Now the vehicle is completely stopped ZZz`;
    }

}


/* const v1 = new Vehicle("Toyota", "Corolla", "2018", "800");
console.log(v1.Make);
console.log(v1.Model);
console.log(v1.Year);
console.log(v1.Weight); */

const car1 = new Cars("Chevrolet", "Captiva", "2021", "450");
console.log(car1.Make);
console.log(car1.Model);
console.log(car1.Year);
console.log(car1.Weight); 
console.log(car1.Drive());
console.log(car1.Stop());
console.log(car1.Drive());
console.log(car1.Stop());
console.log(car1.Drive());
console.log(car1.Stop());
console.log(car1.Drive());
console.log(car1.Stop());
console.log(car1.Drive());
console.log(car1.Stop());
console.log(car1.TripsSinceMaintenance);
console.log(car1.NeedsMaintenance);
console.log("Then I take the car to the workshop...");
car1.Repair();
console.log(car1.TripsSinceMaintenance);
console.log(car1.NeedsMaintenance);



const car2 = new Cars("Renault", "Stepway", "2019", "500");
console.log(car2.Make);
console.log(car2.Model);
console.log(car2.Year);
console.log(car2.Weight); 
console.log(car2.Drive());
console.log(car2.Stop());
console.log(car2.Drive());
console.log(car2.Stop());
console.log(car2.Drive());
console.log(car2.Stop());
console.log(car2.TripsSinceMaintenance);
console.log(car2.NeedsMaintenance);


const car3 = new Cars("Toyota", "Corolla", "2020", "700");
console.log(car3.Make);
console.log(car3.Model);
console.log(car3.Year);
console.log(car3.Weight); 
console.log(car3.Drive());
console.log(car3.Stop());
console.log(car3.TripsSinceMaintenance);
console.log(car3.NeedsMaintenance);



/**Extra Credit:

Create a Planes class that is also a subclass of Vehicle. Add methods to the Planes class for Flying and Landing (similar to Driving and Stopping), but different in one respect: Once the NeedsMaintenance boolean gets set to true, any attempt at flight should be rejected (return false), and an error message should be printed saying that the plane can't fly until it's repaired. */


class Planes extends Vehicle{
    
    isFlying = false;
    canFly = true;

    constructor(make, model, year, weight) {
        super(make, model, year, weight); // call the super class constructor and pass in the parameters
    }

    Flying(){ 
        this.canFly = !super.planeTrips();
        if(this.canFly){
            this.isFlying = true;
            return `Now the plane is FLYIIIINGGGG`;
        }else{
            alert("This plane cannot fly again until it is fully repaired.");
            return "This plane cannot fly again until it is fully repaired."
        }
        
    }

    Landing(){
        this.isFlying = false;
        return `The plane has succesfully landed`;
    }

}

const plane1 = new Planes("Boeing","777","2015","50000");
console.log(plane1.Make);
console.log(plane1.Model);
console.log(plane1.Year);
console.log(plane1.Weight);
console.log(plane1.Flying());
console.log(plane1.Landing());
console.log(`The number of flights already done is ${plane1.TripsSinceMaintenance}`);
console.log(plane1.Flying());
console.log(plane1.Landing());
console.log(`The number of flights already done is ${plane1.TripsSinceMaintenance}`);
console.log(plane1.Flying());
console.log(plane1.Landing());
console.log(`The number of flights already done is ${plane1.TripsSinceMaintenance}`);
console.log(plane1.Flying());

