// Define a list of animals
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print out the name of each animal using a for loop
console.log("Names of animals:");
for (const animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (const animal of animals) {
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
