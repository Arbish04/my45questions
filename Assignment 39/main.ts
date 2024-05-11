// Function to format city and country
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  // Example usage
  const formattedCityCountry1 = city_country("Karachi", "Pakistan");
  console.log(formattedCityCountry1); // Output: Karachi, Pakistan
  
  const formattedCityCountry2 = city_country("New York", "USA");
  console.log(formattedCityCountry2); // Output: New York, USA
  