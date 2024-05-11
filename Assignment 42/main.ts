// Define the array of magician names
const magicians: string[] = ["David Copperfield", "Penn & Teller", "Dynamo", "Criss Angel"];

// Function to modify each magician's name to include "the Great"
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => magician + " the Great");
}

// Function to print each magician's name
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Creating a copy of the magicians array and modifying the copy
const magiciansCopy = [...magicians]; // Use spread operator to create a shallow copy
const greatMagicians = make_great(magiciansCopy);

// Displaying the original and modified lists of magicians
console.log("Original Magicians:");
show_magicians(magicians);  // Shows original names, unchanged

console.log("Great Magicians:");
show_magicians(greatMagicians);  // Shows names with "the Great" added

