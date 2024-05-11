// Define a Shirt class
var Shirt = /** @class */ (function () {
    function Shirt(size, message) {
        if (size === void 0) { size = "large"; }
        if (message === void 0) { message = "I love TypeScript"; }
        this.size = size;
        this.message = message;
    }
    // Method to display shirt details
    Shirt.prototype.displayDetails = function () {
        console.log("Size: ".concat(this.size, ", Message: ").concat(this.message));
    };
    return Shirt;
}());
// Function to create a shirt
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    var shirt = new Shirt(size, message);
    return shirt;
}
// Create a large shirt with default message
var largeShirtDefault = make_shirt();
console.log("Large Shirt with Default Message:");
largeShirtDefault.displayDetails();
// Create a medium shirt with default message
var mediumShirtDefault = make_shirt("medium");
console.log("\nMedium Shirt with Default Message:");
mediumShirtDefault.displayDetails();
// Create a shirt of any size with a different message
var customShirt = make_shirt("small", "Custom message: Hello, world!");
console.log("\nCustom Shirt:");
customShirt.displayDetails();
