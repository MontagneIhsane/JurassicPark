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