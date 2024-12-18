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

class Enclosure {
    constructor(id, size, dinosaurs = [], location, type) {
        this.id = id;             
        this.size = size;           
        this.dinosaurs = dinosaurs; 
        this.location = location;   
        this.type = type; 
    }

    addDinosaur(dinosaur) {
    this.dinosaurs.push(dinosaur);
    console.log(`${dinosaur.name} a été ajouté à l'enclos ${this.id}.`);
    }

    removeDinosaur(dinosaurName) {
    const index = this.dinosaurs.findIndex(dino => dino.name === dinosaurName);
    if (index !== -1) {
        this.dinosaurs.splice(index, 1);
        console.log(`${dinosaurName} a été retiré de l'enclos ${this.id}.`);
    } else {
        console.log(`Le dinosaure ${dinosaurName} n'est pas dans l'enclos ${this.id}.`);
    }
    }

    listDinosaurs() {
    if (this.dinosaurs.length === 0) {
        console.log(`L'enclos ${this.id} est vide.`);
    } else {
        console.log(`Dinosaurs dans l'enclos ${this.id}:`);
        this.dinosaurs.forEach(dinosaur => {
        console.log(`- ${dinosaur.name} (${dinosaur.species})`);
        });
    }
    }
}
