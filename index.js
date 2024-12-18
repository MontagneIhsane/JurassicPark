class Dinosaur {
    constructor(name, species, age, diet, status) {
    this.name = name;        
    this.species = species;  
    this.age = age;          
    this.diet = diet;        
    this.status = status;    
    }

    displayInfo() {
        console.log(`Nom: ${this.name}`);
        console.log(`Espèce: ${this.species}`);
        console.log(`Âge: ${this.age} millions d'années`);
        console.log(`Régime alimentaire: ${this.diet}`);
        console.log(`État: ${this.status}`);
    }
}

class Herbivore extends Dinosaur {
    constructor(name, species, age, diet, status, preferredPlant, plantType) {
        super(name, species, age, diet, status); 
        this.preferredPlant = preferredPlant;    
        this.plantType = plantType;              
    }

    eatPlant() {
    console.log(`${this.name} mange ${this.preferredPlant}.`);
    }
}

class Carnivore extends Dinosaur {
    constructor(name, species, age, diet, status, preferredPrey, preyType) {
        super(name, species, age, diet, status); 
        this.preferredPrey = preferredPrey;       
        this.preyType = preyType;                 
    }

    hunt() {
    console.log(`${this.name} chasse ${this.preferredPrey}.`);
    }
}