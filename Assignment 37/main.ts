// Define a Shirt class
class Shirt {
    size: string;
    message: string;
  
    constructor(size: string = "large", message: string = "I love TypeScript") {
      this.size = size;
      this.message = message;
    }
  
    // Method to display shirt details
    displayDetails() {
      console.log(`Size: ${this.size}, Message: ${this.message}`);
    }
  }
  
  // Function to create a shirt
  function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    const shirt = new Shirt(size, message);
    return shirt;
  }
  
  // Create a large shirt with default message
  const largeShirtDefault = make_shirt();
  console.log("Large Shirt with Default Message:");
  largeShirtDefault.displayDetails();
  
  // Create a medium shirt with default message
  const mediumShirtDefault = make_shirt("medium");
  console.log("\nMedium Shirt with Default Message:");
  mediumShirtDefault.displayDetails();
  
  // Create a shirt of any size with a different message
  const customShirt = make_shirt("small", "Custom message: Hello, world!");
  console.log("\nCustom Shirt:");
  customShirt.displayDetails();
  