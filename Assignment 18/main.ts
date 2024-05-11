//Seeing the World: Think of at least five places in the world you’d like to visit.

let places: string[] = ["London", "Tokyo", "America", "New York"]
console.log("Original Order:", places);
console.log("Alphabetical Order:", [...places].sort());
console.log("Orginal Oder after sorting:", places);
console.log("Reverse Alphabetical Order:", [...places].sort().reverse());
console.log("Original order after reverse sorting:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Sorted in alphabetical order:", places);

