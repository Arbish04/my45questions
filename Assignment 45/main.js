// Function to make a sandwich with given items
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        items.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item));
        });
    }
    console.log(); // Add a newline for better readability
}
// Call the function with different numbers of arguments
make_sandwich("Ham", "Cheese", "Lettuce", "Tomato");
make_sandwich("Peanut Butter", "Jelly");
make_sandwich("Turkey", "Bacon", "Avocado");
make_sandwich(); // Call with no arguments
