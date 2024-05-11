var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// Creating a copy of the magicians array and modifying the copy
var magiciansCopy = __spreadArray([], magicians, true); // Use spread operator to create a shallow copy
var greatMagicians = make_great(magiciansCopy);
// Displaying the original and modified lists of magicians
console.log("Original Magicians:");
show_magicians(magicians); // Shows original names, unchanged
console.log("Great Magicians:");
show_magicians(greatMagicians); // Shows names with "the Great" added
