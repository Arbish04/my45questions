// Function to format city and country
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Example usage
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Cairo", "Egypt"));
// Define the array of magician names
var magicians = ["David Copperfield", "Penn & Teller", "Dynamo", "Criss Angel"];
// Function to modify each magician's name to include "the Great"
function make_great(magicians) {
    return magicians.map(function (magician) { return magician + " the Great"; });
}
// Function to print each magician's name
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Modify the array of magicians to include "the Great"
var greatMagicians = make_great(magicians);
// Show the modified list of magicians
console.log("Original Magicians:");
show_magicians(magicians); // Shows original names
console.log("Great Magicians:");
show_magicians(greatMagicians); // Shows modified names
