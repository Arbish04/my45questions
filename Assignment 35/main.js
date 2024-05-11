// Define a list of animals
var animals = ["Dog", "Cat", "Rabbit"];
// Print out the name of each animal using a for loop
console.log("Names of animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Print a statement about each animal
console.log("\nStatements about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    switch (animal) {
        case "Dog":
            console.log("A dog would make a great pet.");
            break;
        case "Cat":
            console.log("A cat can be a wonderful companion.");
            break;
        case "Rabbit":
            console.log("A rabbit is an adorable and gentle pet.");
            break;
        default:
            console.log("Unknown animal.");
    }
}
// Print what these animals have in common
console.log("\nAny of these animals would make a great pet!");