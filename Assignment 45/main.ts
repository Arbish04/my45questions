// Function to make a sandwich with given items
function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        items.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    console.log(); // Add a newline for better readability
}

// Call the function with different numbers of arguments
make_sandwich("Ham", "Cheese", "Lettuce", "Tomato");
make_sandwich("Peanut Butter", "Jelly");
make_sandwich("Turkey", "Bacon", "Avocado");
make_sandwich(); // Call with no arguments
