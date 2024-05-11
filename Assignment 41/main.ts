// Function to format city and country
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Example usage
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Cairo", "Egypt"));
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

// Modify the array of magicians to include "the Great"
const greatMagicians = make_great(magicians);

// Show the modified list of magicians
console.log("Original Magicians:");
show_magicians(magicians);  // Shows original names
console.log("Great Magicians:");
show_magicians(greatMagicians);  // Shows modified names
