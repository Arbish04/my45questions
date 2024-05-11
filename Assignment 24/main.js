function runInventoryChecks() {
    console.log("Starting Inventory Checks:");
    // Sample inventory data
    var books = [
        { title: "Pride and Prejudice", author: "Jane Austen", quantity: 3 },
        { title: "1984", author: "George Orwell", quantity: 0 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", quantity: 5 }
    ];
    // Tests for equality and inequality with strings (book titles)
    var searchTitle = "1984";
    console.log("Title Equality Test (True):", books[1].title === searchTitle);
    console.log("Title Inequality Test (True):", books[0].title !== searchTitle);
    // Tests using the lower case function
    console.log("Author Case Insensitive Test (True):", books[0].author.toLowerCase() === "jane austen");
    console.log("Author Case Insensitive Test (False):", books[1].author.toLowerCase() !== "george orwell");
    // Numerical tests for quantities
    console.log("Quantity Equality Test (False):", books[1].quantity === books[2].quantity);
    console.log("Quantity Greater Than Test (True):", books[2].quantity > books[0].quantity);
    console.log("Quantity Less Than or Equal Test (True):", books[0].quantity <= books[2].quantity);
    // Tests using "and" and "or" operators
    console.log("Complex Check (True):", books[2].quantity > 2 && books[2].author === "Harper Lee");
    console.log("Complex Check (False):", books[1].quantity > 0 || books[1].author === "Jane Austen");
    // Test whether a book is in stock
    console.log("Book In Stock Test (True):", books[0].quantity > 0);
    console.log("Book In Stock Test (False):", books[1].quantity <= 0);
    // Test whether an author is in the list
    var searchAuthor = "Harper Lee";
    console.log("Author in List Test (True):", books.some(function (book) { return book.author === searchAuthor; }));
    console.log("Author in List Test (False):", books.some(function (book) { return book.author === "Mark Twain"; }));
    console.log("Inventory Checks Completed.");
}
runInventoryChecks();
